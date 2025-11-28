
// src/components/UserCard.jsx
export default function UserCard({ user }) {
  return (
    <div style={styles.card}>
      <img src={user.avatar_url} alt={`${user.login} avatar`} style={styles.avatar} />
      <div style={styles.info}>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={styles.link}>
          {user.login}
        </a>
        <p style={styles.type}>Type: {user.type}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex', alignItems: 'center', gap: '12px',
    padding: '12px', border: '1px solid #e1e4e8', borderRadius: '10px',
  },
  avatar: { width: 56, height: 56, borderRadius: '50%' },
  info: { display: 'flex', flexDirection: 'column' },
  link: { color: '#0366d6', textDecoration: 'none', fontWeight: 600 },
  type: { margin: 0, color: '#586069', fontSize: '0.9rem' },
};
