var departments=[];
var employeeArray=[];

var departmentSelect = document.querySelector('select#departments');
var employeeSelect = document.querySelector('select#employee');

var employeeDetails= document.querySelector('.employee-details');

 departmentSelect.addEventListener("change",departmentChange);
 employeeSelect.addEventListener("change",employeeChange);

var employees = {   
    "key1":{
        name : 'manoj',
        department: 'batsman',
        age : 24
    },

    "key2":{
        name : 'haribabu',
        department : 'all-rounder',
        age : 52
    },

    "key3":{
        name : 'chaithu',
        department : 'bowler',
        age : 24
    },

    "key4":{
        name : 'sai',
        department : 'batsman',
        age : 80
    },
    "key5":{
        name : 'jill',
        department : 'bowler',
        age : 10
    },
}

    for ( key in employees) {
        if(employees.hasOwnProperty(key))
        {
            var empDepartment = employees[key].department;
            console.log(empDepartment);
            if(departments.indexOf(empDepartment)==-1)
            {
                departments.push(empDepartment);
                var deptOpt = document.createElement('option');
                deptOpt.innerHTML = empDepartment;
                departmentSelect.appendChild(deptOpt);
            }
        }
    }

    function departmentChange(){
        var length = employeeSelect.options.length;
        employeeDetails.style.display = 'none';
        employeeSelect.innerHTML = "<option>Select Employee</option>";
        for(i=1;i<length;i++)
        {
            employeeSelect.options[i]=null;
        }
        var selectedDepartment = departmentSelect.options[departmentSelect.selectedIndex].value;
        console.log(selectedDepartment);
        if(selectedDepartment != "Select Department"){
            console.log("not select department");
            employeeSelect.style.display='block';
        }
        else{
            employeeSelect.style.display='none';
            }

            
        for ( key in employees) {
            if(employees.hasOwnProperty(key))
            {
                var empDepartment = employees[key].department;
                var empName = employees[key].name;
                if(empDepartment == selectedDepartment)
                {
                    var Opt = document.createElement('option');
                    Opt.innerHTML = empName;
                    employeeSelect.appendChild(Opt);
                }
            }
        }
    }



    function employeeChange(){
        
        var selectedEmployee = employeeSelect.options[employeeSelect.selectedIndex].value;
        var employeeName = document.querySelector('#name');
        var empage = document.querySelector('#age');
        var empDepartment = document.querySelector('#department');

        console.log("selected Employee is   "+selectedEmployee);
        if(selectedEmployee != "Select employee"){
            employeeDetails.style.display='block';
           
            for ( key in employees) {
                if(employees.hasOwnProperty(key))
                {
                    var empName = employees[key].name;
                    if(empName == selectedEmployee)
                    {
                        employeeName.innerHTML=empName;
                        empage.innerHTML=employees[key].age;
                        empDepartment.innerHTML=employees[key].department;
                    }
                }
            }
            }
            else{
                employeeDetails.style.display='none';
            }
        }

    