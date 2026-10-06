import { useEffect, useState } from 'react';

type Activity = { label: string; detail: string; state: 'done' | 'active' | 'queued' };

const activities: Activity[] = [
  { label: 'Runtime guard', detail: 'Permission engine ready', state: 'done' },
  { label: 'Local provider', detail: 'Ollama is optional', state: 'active' },
  { label: 'Python bridge', detail: 'Waiting for backend service', state: 'queued' }
];

const metrics = [
  { label: 'CPU', value: '--', note: 'Awaiting system adapter' },
  { label: 'Memory', value: '--', note: 'Awaiting system adapter' },
  { label: 'Storage', value: '--', note: 'Awaiting system adapter' }
];

export default function App() {
  const [message, setMessage] = useState('');
  const [stopped, setStopped] = useState(false);
  const [backend, setBackend] = useState('Not connected');

  useEffect(() => {
    window.lizaed?.getStatus().then((status) => setBackend(status.backend));
  }, []);

  function submitMessage(event: React.FormEvent) {
    event.preventDefault();
    if (!message.trim() || stopped) return;
    setMessage('');
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">L</span><div><strong>LIZAED</strong><small>local agent console</small></div></div>
        <nav className="nav-list" aria-label="Primary navigation">
          <button className="nav-item active"><span>◈</span> Command center</button>
          <button className="nav-item"><span>⌁</span> Activity stream</button>
          <button className="nav-item"><span>⚙</span> Settings</button>
        </nav>
        <div className="sidebar-footer"><div className="connection-dot" /><div><small>Core status</small><strong>{backend}</strong></div></div>
      </aside>

      <section className="workspace">
        <header className="topbar"><div><p className="eyebrow">PHASE 01 / FOUNDATION</p><h1>Command center</h1></div><div className="header-actions"><span className="mode-pill"><i /> Offline-ready</span><button className="stop-button" onClick={() => setStopped(!stopped)}>{stopped ? 'Resume agent' : 'Stop agent'}</button></div></header>

        <div className="content-grid">
          <section className="conversation-panel panel">
            <div className="panel-heading"><div><span className="section-kicker">Conversation</span><h2>What should we do?</h2></div><span className="status-label"><i /> {stopped ? 'Stopped' : 'Listening'}</span></div>
            <div className="conversation-body">
              <div className="welcome-message"><div className="agent-orbit">L</div><div><strong>Ready when you are.</strong><p>Ask for a plan, inspect your environment, or connect a local model. High-risk actions will always pause for your approval.</p></div></div>
              <div className="suggestion-row"><button onClick={() => setMessage('Check my development environment')}>Check my environment</button><button onClick={() => setMessage('Show me the current task plan')}>Show task plan</button></div>
            </div>
            <form className="composer" onSubmit={submitMessage}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder={stopped ? 'Agent stopped' : 'Tell LIZAED what you need...'} disabled={stopped} /><button className="voice-button" type="button" aria-label="Voice input">◉</button><button className="send-button" type="submit" aria-label="Send message">↗</button></form>
          </section>

          <section className="overview-panel panel"><div className="panel-heading"><div><span className="section-kicker">Machine overview</span><h2>System pulse</h2></div><button className="icon-button" aria-label="Refresh metrics">↻</button></div><div className="metrics">{metrics.map((metric) => <div className="metric" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note}</small><div className="metric-line" /></div>)}</div><div className="resource-note"><span>i</span><p>Live system adapters arrive in the System phase. No values are fabricated in this foundation build.</p></div></section>

          <section className="activity-panel panel"><div className="panel-heading"><div><span className="section-kicker">Execution trace</span><h2>Activity</h2></div><span className="count-label">03 signals</span></div><div className="activity-list">{activities.map((activity, index) => <div className="activity-item" key={activity.label}><div className={`activity-marker ${activity.state}`}>{activity.state === 'done' ? '✓' : index + 1}</div><div><strong>{activity.label}</strong><p>{activity.detail}</p></div><span className={`activity-state ${activity.state}`}>{activity.state}</span></div>)}</div></section>
        </div>
      </section>
    </main>
  );
}
