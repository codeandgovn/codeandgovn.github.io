/* Code&Go — thin wrappers around Supabase Auth. Loaded after supabase-client.js. */

async function signUpWithEmail(email, password, username) {
  const { data, error } = await sb.auth.signUp({
    email,
    password,
    options: { data: { username: username || email.split("@")[0] } }
  });
  return { data, error };
}

async function signInWithEmail(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOutUser() {
  await sb.auth.signOut();
  location.href = "index.html";
}

async function getSessionUser() {
  const { data: { session } } = await sb.auth.getSession();
  return session ? session.user : null;
}
