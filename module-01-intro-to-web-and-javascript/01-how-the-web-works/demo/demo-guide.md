# Demo Guide — How the Web Works
**Module 1, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Browser walkthrough (no code files needed)
**Duration:** 8–10 minutes

---

## What This Demo Teaches

Students will watch a live HTTP request-response cycle happen in real time using Chrome DevTools. By the end, they will be able to:
- Open the Network tab in DevTools
- Identify a request and its key parts (URL, method, status code)
- See the HTML response body that the server sent back

---

## Setup (Before Class)

- Open **Google Chrome**
- Have `https://jumia.com.ng` ready to type (do not pre-load it)
- Make sure DevTools is closed at the start — you will open it live

---

## Demo Steps

### Step 1 — Open DevTools and the Network Tab
1. Open a new Chrome tab
2. Press **F12** (or right-click anywhere → **Inspect**) to open DevTools
3. Click the **Network** tab at the top of the DevTools panel
4. Tell students: *"This tab records every single request your browser makes. Right now it's empty because we haven't loaded anything yet."*

---

### Step 2 — Type the URL and Watch Requests Fire
1. Click into the address bar and type `https://jumia.com.ng`
2. Press **Enter**
3. Watch the Network tab fill up with dozens of requests in real time

> **Say to students:** *"Look at that — your browser didn't make one request. It made dozens. Each row is a separate request for a separate file — one for the HTML, others for CSS, JavaScript files, images, fonts. The page you see is assembled from all of these pieces."*

---

### Step 3 — Find the Main HTML Request
1. Look at the very first request at the top of the list — it should be the document request for `jumia.com.ng` (or `www.jumia.com.ng`)
2. It will have **Type: document** in the Type column
3. Click on it to open the request details panel on the right

> **Say to students:** *"This first request is the most important one — it's your browser asking Jumia's server for the main HTML page. Everything else on the page comes after this."*

---

### Step 4 — Show the Request Headers
1. In the right panel, click the **Headers** tab (it should already be selected)
2. Point out the following and say each one aloud:

| What to point out | What to say |
|---|---|
| **Request URL** | *"This is the exact address your browser requested — the full URL."* |
| **Request Method: GET** | *"GET means 'please give me this resource.' It's the most common HTTP method. You're not sending anything — you're just asking to receive."* |
| **Status Code: 200** | *"200 means success. The server found the page and sent it back. If you see 404, the page wasn't found. 500 means the server had an error."* |

> **Ask students:** *"What do you think a 404 means in real life? Have you ever seen that on a website?"* (Wait for responses.)

---

### Step 5 — Show the Response Body
1. Click the **Response** tab in the right panel
2. You will see the raw HTML that Jumia's server sent back
3. Scroll through it briefly

> **Say to students:** *"This is what the server actually sent back to your browser — raw HTML text. Your browser read this text, built the DOM from it, applied the CSS, ran the JavaScript, and turned it into the page you see. This is the response body."*

---

### Step 6 — Connect It Back to the Slides
Summarise by pointing at the Network tab one more time:

> *"Every row in this list is one complete request-response cycle. Your browser sent a request, the server sent a response. That's it — that's how the web works. The same cycle happens whether you're loading Jumia, checking your GTBank account online, or — very soon — using the Fetch API to load data in your own JavaScript apps."*

---

## Teaching Tips

- **If the Network tab is cluttered:** use the filter bar to type `doc` to show only document requests, making it easier to find the main HTML request
- **If students can't see the status code:** scroll up in the Headers panel — it's at the top under "General"
- **If the page loads too fast:** click the **red record button** to stop recording, then click the **clear** button (🚫), then reload to see it from the beginning
- **Encourage interaction:** ask students to predict the status code before you reveal it — most will guess correctly, which builds confidence

---

## What's Next

**Task 3** → Slides for *'Where JavaScript Fits In'*
After this demo, students have seen the web working live. The next topic explains exactly where JavaScript sits in that picture — and why it exists.