const API = "http://localhost:5000/api";

async function register() {
  await fetch(API + "/auth/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });
  alert("Registered!");
}

async function login() {
  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  window.location = "dashboard.html";
}

async function addEntry() {
  await fetch(API + "/journal", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: entry.value
    })
  });
  alert("Saved!");
}
