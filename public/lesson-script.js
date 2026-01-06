// lesson-script.js

// ------------------------
// 1. Content Injection Logic
// ------------------------

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function loadLessonContent() {
    const courseId = getUrlParameter('id');
    const content = window.COURSE_CONTENT[courseId];

    if (!content) {
        document.getElementById('lesson-title').textContent = "Error: Lesson Not Found";
        return;
    }

    document.getElementById('lesson-title').textContent = content.title;
    document.getElementById('video-frame').src = `https://www.youtube.com/embed/${content.video_id}`;

    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    content.questions.forEach(q => {
        const li = document.createElement('li');
        li.textContent = q;
        questionsList.appendChild(li);
    });

    document.getElementById('tips-title').textContent = content.tips_title;
    document.getElementById('instruction-text').textContent = content.tips;
}

document.addEventListener('DOMContentLoaded', loadLessonContent);

// ------------------------
// 2. Recording Logic
// ------------------------

const recordBtn = document.getElementById('record-btn');
const finishBtn = document.getElementById('finish-btn');
const pauseBtn = document.getElementById('pause-btn');
const statusMessage = document.getElementById('status-message');
const resultsDisplay = document.getElementById('results-display');

const BACKEND_ENDPOINT = 'http://127.0.0.1:8000/analyze-speech';

let mediaRecorder;
let audioChunks = [];
let recordingInterval;
let startTime;

// Update recording timer
function updateTimer() {
    const elapsed = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsed / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    recordBtn.textContent = `🔴 Recording ${minutes}:${seconds}`;
}

// Start recording
async function startRecording() {
    resultsDisplay.style.display = 'none';
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm; codecs=opus' });
        audioChunks = [];

        mediaRecorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = uploadAudio;

        mediaRecorder.start();
        startTime = Date.now();
        recordingInterval = setInterval(updateTimer, 1000);

        recordBtn.textContent = 'Recording 00:00';
        recordBtn.disabled = true;
        recordBtn.style.backgroundColor = '#cc0000';
        finishBtn.disabled = false;
        pauseBtn.disabled = false;
        statusMessage.textContent = 'Recording started. Speak your answers now...';

    } catch (err) {
        statusMessage.textContent = '❌ Could not access microphone. Please allow microphone permissions.';
        console.error(err);
    }
}

// Stop recording
function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        clearInterval(recordingInterval);

        recordBtn.textContent = 'Processing...';
        recordBtn.style.backgroundColor = '#333';
        finishBtn.disabled = true;
        pauseBtn.disabled = true;
        statusMessage.textContent = 'Recording stopped. Preparing for analysis...';
    }
}

// Upload audio to backend
function uploadAudio() {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });

    if (audioBlob.size === 0) {
        statusMessage.textContent = '❌ Recording failed: No audio captured. Please try again.';
        recordBtn.textContent = '🔴 Start Recording';
        recordBtn.disabled = false;
        recordBtn.style.backgroundColor = '#cc0000';
        return;
    }

    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.webm');

    statusMessage.textContent = 'Uploading audio to backend for analysis...';

    fetch(BACKEND_ENDPOINT, { method: 'POST', body: formData })
        .then(response => {
            if (!response.ok) throw new Error(`Server Error: ${response.status} ${response.statusText}`);
            return response.json();
        })
        .then(data => {
            statusMessage.textContent = '✅ Analysis Complete! See your scores below.';
            resultsDisplay.style.display = 'block';
            resultsDisplay.innerHTML = `
                <h3>Analysis Results:</h3>
                <p>Fluency Score: <b>${data.fluency_score || 'N/A'}%</b></p>
                <p>Clearness Feedback: ${data.clearness_feedback || 'No specific feedback.'}</p>
                <p>Transcription: <i>"${data.transcript || 'Transcription data not returned.'}"</i></p>
                <p class="small-print">Message from backend: ${data.message || 'Success'}</p>
            `;
            recordBtn.textContent = '🔴 Start Recording';
            recordBtn.disabled = false;
            recordBtn.style.backgroundColor = '#cc0000';
        })
        .catch(error => {
            statusMessage.textContent = `❌ Analysis failed: ${error.message}`;
            console.error(error);
            recordBtn.textContent = '🔴 Start Recording';
            recordBtn.disabled = false;
            recordBtn.style.backgroundColor = '#cc0000';
        });
}

// Event listeners
recordBtn.addEventListener('click', startRecording);
finishBtn.addEventListener('click', stopRecording);
// Pause button disabled for simplicity
