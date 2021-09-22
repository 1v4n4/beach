import { getUser } from './localStorage';

const msgs = (msg) => {
  const msgDiv = document.getElementById('forAlert');
  msgDiv.innerHTML = `<p className="msgs">${msg}</p>`;
  setTimeout(() => {
    msgDiv.innerHTML = '';
  }, 1000);
};

const logged = () => {
  const result = getUser();
  if (result) return true;
  return false;
};

export
{ msgs, logged };
