import prompt from '../data/prompt.json';

export default function Page() {
  return (
    <main>
      <h1>Centagon 2026 New Year Prompt</h1>
      <p>
        Crafted for a compelling 60-second celebratory message honouring the
        Centagon International School community in Maitama, Abuja.
      </p>

      <section>
        <article className="card">
          <h2>Key Details</h2>
          <p>
            <strong>Title:</strong> {prompt.title}
          </p>
          <p>
            <strong>Duration:</strong> {prompt.durationSeconds} seconds
          </p>
          <p>
            <strong>Location:</strong> {prompt.location}
          </p>
          <p>
            <strong>Tone:</strong> {prompt.tone.join(', ')}
          </p>
          <p>
            <strong>Music Cue:</strong> {prompt.musicCue}
          </p>
        </article>

        <article className="card">
          <h2>Segments Overview</h2>
          <pre>{JSON.stringify(prompt.segments, null, 2)}</pre>
        </article>

        <article className="card">
          <h2>Full Prompt JSON</h2>
          <pre>{JSON.stringify(prompt, null, 2)}</pre>
        </article>
      </section>
    </main>
  );
}
