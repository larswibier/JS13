const employees = [
    { name: 'Laila Johanne Handelsby', role: 'Rektor', img: 'img/laila.JPG' },
    { name: 'Torben Andersen', role: 'Assisterende rektor', img: 'img/torben.jpg' },
    { name: 'Martin Sandø-Frank', role: 'Studieleder', img: 'img/martin.jpg' },
    { name: 'Cathrine Mannsaker', role: 'Undervisningsleder', img: 'img/cathrine.jpg' },
    { name: 'Anette Øwre Bollvåg', role: 'Undervisningsleder', img: 'img/anette.jpg' },
    { name: 'Anne Raastad-Hoel', role: 'Undervisningsleder', img: 'img/anne.jpg' },
    { name: 'Erik Bergerud', role: 'Undervisningsleder', img: 'img/erik.jpg' },
    { name: 'Camilla Engberg', role: 'Undervisningsleder', img: 'img/camilla.jpg' },
    { name: 'Sissel Moen', role: 'Administrasjonsleder', img: 'img/sissel.jpg' }
  ];
  
  function search(event) {
    if (event.key === 'Enter') {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
  
      const matchingEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(searchTerm);
      });
  
      if (matchingEmployees.length === 0) {
        resultsDiv.innerHTML = 'Ingen ansatte funnet med det navnet.';
      } else {
        matchingEmployees.forEach(employee => {
          const employeeDiv = document.createElement('div');
          employeeDiv.classList.add('employee');
  
          const namePara = document.createElement('p');
          const boldName = document.createElement('strong');
          boldName.textContent = employee.name;
          namePara.appendChild(boldName);
          employeeDiv.appendChild(namePara);
  
          const rolePara = document.createElement('p');
          rolePara.textContent = employee.role;
          employeeDiv.appendChild(rolePara);
  
          const loremPara = document.createElement('p');
          loremPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lectus in mi consequat suscipit.';
          loremPara.style.fontStyle = 'italic';
          employeeDiv.appendChild(loremPara);
  
          const img = document.createElement('img');
          img.src = employee.img;
          img.alt = employee.name;
          img.classList.add('employee-image');
          employeeDiv.appendChild(img);
  
          resultsDiv.appendChild(employeeDiv);
        });
      }
  
      document.getElementById('searchInput').value = '';
    }
  }
  