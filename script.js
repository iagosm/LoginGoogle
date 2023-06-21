function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  console.log(data)
  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  email.textContent = data.email
  family_name.textContent = data.family_name
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "521314762-ui4nnp8g2jhr0k3ar5h9c4oi7dd8bovm.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog // caixa de login um pouco mais rapida, porém n conseguimos realizar teste se n tiver com dominio ssl = https
}