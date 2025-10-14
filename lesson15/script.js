// Plan:
// 1. cookie
// 2. JSON
// 3. sessionStorage
// 4. localStorage
// 5. data attributes
// 6. Practice

const form = document.querySelector("form");
const userNameInput = document.querySelector("#user-name-input");
const tbody = document.querySelector("tbody");
const editForm = document.querySelector("form#edit-user");
const editInput = document.querySelector("#edit-user input");
const editButton = document.querySelector("#edit-user button");

const users = [];

function getId() {
  return new Date().getTime();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = userNameInput.value;
  const id = getId();

  const user = {
    name: value,
    id,
  };

  buildRow(user.name, user.id);

  const usersFromLocalStorage = localStorage.getItem("users");
  localStorage.setItem(
    "users",
    usersFromLocalStorage
      ? JSON.stringify([
          ...JSON.parse(usersFromLocalStorage),
          { name: value || "Unknown user", uuid: uuid },
        ])
      : JSON.stringify([{ name: value || "Unknown user", uuid: uuid }])
  );

  form.reset();
});

function buildRow(name, uuid) {
  const tr = document.createElement("tr");

  tr.setAttribute("data-uuid", uuid);
  const td = document.createElement("td");
  td.textContent = name || "Unknown user";

  tr.append(td);
  tr.append(buildTdButton("View", "view"));
  tr.append(buildTdButton("Edit", "edit"));
  tr.append(buildTdButton("Delete", "delete"));

  tbody.append(tr);
}

function buildTdButton(textButton, textAttribute) {
  const td = document.createElement("td");
  const button = document.createElement("button");
  button.setAttribute("data-name", textAttribute);

  button.textContent = textButton;
  td.append(button);

  return td;
}

// window.addEventListener("load", initTable);

// function initTable() {
//   const users = localStorage.getItem("users");

//   if (users) {
//     JSON.parse(users).forEach((user) => buildRow(user.name, user.uuid));
//   }
// }

// function buildRow(name, uuid) {
//   const tr = document.createElement("tr");

//   tr.setAttribute("data-uuid", uuid);
//   const td = document.createElement("td");
//   td.textContent = name || "Unknown user";

//   tr.append(td);
//   tr.append(buildTdButton("View", "view"));
//   tr.append(buildTdButton("Edit", "edit"));
//   tr.append(buildTdButton("Delete", "delete"));

//   tbody.append(tr);
// }

// function buildTdButton(textButton, textAttribute) {
//   const td = document.createElement("td");
//   const button = document.createElement("button");
//   button.setAttribute("data-name", textAttribute);

//   button.textContent = textButton;
//   td.append(button);

//   return td;
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const value = userNameInput.value;
//   const uuid = Number(new Date());

//   buildRow(value, uuid);

//   const usersFromLocalStorage = localStorage.getItem("users");
//   localStorage.setItem(
//     "users",
//     usersFromLocalStorage
//       ? JSON.stringify([
//           ...JSON.parse(usersFromLocalStorage),
//           { name: value || "Unknown user", uuid: uuid },
//         ])
//       : JSON.stringify([{ name: value || "Unknown user", uuid: uuid }])
//   );
//   form.reset();
// });

// tbody.addEventListener("click", (event) => {
//   const targetButton = event.target.getAttribute("data-name");
//   const targetRow = event.target.closest("tr");
//   const targetRowUuid = targetRow.getAttribute("data-uuid");

//   switch (targetButton) {
//     case "view":
//       console.log(targetRowUuid, targetRow.querySelector("td").textContent);
//       break;
//     case "edit":
//       editInput.removeAttribute("disabled");
//       editButton.removeAttribute("disabled");
//       editInput.focus();
//       editInput.value = targetRow.querySelector("td").textContent;

//       localStorage.setItem("edit-uuid", targetRowUuid);
//       break;
//     case "delete":
//       const localStorageUsers = JSON.parse(localStorage.getItem("users"));
//       const localStorageUsersWithoutDeleted = localStorageUsers.filter(
//         (element) => element.uuid !== +targetRowUuid
//       );
//       localStorage.setItem(
//         "users",
//         JSON.stringify(localStorageUsersWithoutDeleted)
//       );
//       targetRow.remove();
//       break;
//     default:
//       break;
//   }
// });

// editForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const editName = editInput.value;
//   const uuid = localStorage.getItem("edit-uuid");

//   document.querySelector(`tr[data-uuid="${uuid}"] td`).textContent = editName;

//   const localStorageUsers = JSON.parse(localStorage.getItem("users"));
//   const localStorageUsersWithEdited = localStorageUsers.map((element) => {
//     if (element.uuid === +uuid) {
//       return { uuid: element.uuid, name: editName };
//     }

//     return element;
//   });
//   localStorage.setItem("users", JSON.stringify(localStorageUsersWithEdited));

//   editInput.setAttribute("disabled", true);
//   editButton.setAttribute("disabled", true);
//   editForm.reset();
// });
