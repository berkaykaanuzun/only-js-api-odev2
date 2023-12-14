const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/" + "users");
  const data = await res.json();

  const tableBodyEl = document.getElementById("table-body");

  for (users of data) {
    console.log(users);

    const tableBodyContent = `  <tr>
    <td class="card-title">
    <a href="posts.html?userId=${users.id}">
      <span class="card-span"> ID : </span>
      ${users.id}
    </a>
  </td>
       <td class="card-title"><span class="card-span"> Name : </span>${users.name}</td>
       <td class="card-title"><span class="card-span"> Username : </span>${users.username}</td>
       <td class="card-title"><span class="card-span"> Address : </span>${users.address.street} ${users.address.suite} ${users.address.city}</td>
       <td class="card-title"><span class="card-span"> Company : </span>${users.company.name} </td>
      </tr>`;
    console.log(tableBodyContent);
    tableBodyEl.innerHTML += tableBodyContent;
  }
};
getUsers();
