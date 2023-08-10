const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = "screens/login.html"
});

const btnVerTodos = document.querySelectorAll(".btn-ver-todo");

    btnVerTodos.forEach(btnVerTodo => {
        btnVerTodo.addEventListener("click", (event) => {
            event.preventDefault();
            const categoria = event.currentTarget.getAttribute("data-categoria");
            location.href = `screens/ver-categoria.html?categoria=${categoria}`;
        });
    });