noElement = 0;
window.addEventListener('load', () => {
    const to_do_form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tasks = document.querySelector("#tasks");
    to_do_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert('Please enter some tasks before submitting it');
            return;
        }
        else {
            noElement += 1;
            const task = document.createElement('div');
            task.classList.add("task");
            const full_content = document.createElement('div');
            full_content.classList.add("full-content");
            const upper_content = document.createElement('div');
            upper_content.classList.add("upper-content");
            const content = document.createElement('div');
            content.classList.add("content");
            const text = document.createElement('div');
            text.classList.add("text");
            text.innerText = input.value;
            content.appendChild(text);
            const actions = document.createElement('div');
            actions.classList.add("actions");
            const edit = document.createElement('button');
            edit.classList.add("edit");
            edit.innerText = 'Edit';
            const del=document.createElement('button');
            del.classList.add("delete");
            del.innerText = 'Delete'; 
            actions.appendChild(edit);
            actions.appendChild(del);
            upper_content.appendChild(content);
            upper_content.appendChild(actions);
            const middle_content = document.createElement('div');
            middle_content.classList.add("middle-content");
            const lower_content = document.createElement('div');
            lower_content.classList.add("lower-content");
            var current = new Date();
            var hour = (current.getHours()%12).toString();
            var minute = current.getMinutes().toString();
            var second = current.getSeconds().toString();
            var day = current.getDate().toString();
            var month = current.getMonth().toString();
            var year = current.getFullYear().toString();
            if (hour.length == 1) {
                hour = "0" + hour;
            }
            if (minute.length == 1) {
                minute = "0" + minute;
            }
            if (second.length == 1) {
                second = "0" + second;
            }
            if (day.length == 1) {
                day = "0" + day;
            }
            if (month.length == 1) {
                month = "0" + month;
            }
            if (year.length == 1) {
                year = "000" + year;
            }
            var date = day + "/" + month + "/" + year;
            var time = hour + ":" + minute + ":" + second;
            if ((current.getHours() >= 0) && (current.getHours()<12)) {
                time = time + " AM";
            }
            else {
                time = time + " PM";
            }
            const date_div = document.createElement('div');
            date_div.classList.add("date");
            date_div.innerText = date;
            const time_div = document.createElement("div");
            time_div.classList.add("time");
            time_div.innerText=time;
            lower_content.appendChild(date_div);
            lower_content.appendChild(time_div);
            full_content.appendChild(upper_content);
            full_content.appendChild(middle_content);
            full_content.appendChild(lower_content);
            const index = document.createElement('div');
            index.classList.add("index");
            index.innerText = noElement;
            task.appendChild(index);
            task.appendChild(full_content);
            tasks.appendChild(task);
            input.value = '';
            const tex = document.createElement('input');
            tex.classList.add("text");
            tex.value = '';
            tex.type = 'text';
            tex.focus();
            edit.addEventListener('click', (e) => {
                if (edit.innerText.toLowerCase() == "edit") {
                    edit.innerText = "Save";
                    var temp = text.innerText;
                    content.removeChild(text);
                    tex.value = temp;
                    content.appendChild(tex);
                }
                else {
                    edit.innerText = "Edit";
                    content.removeChild(tex);
                    text.innerText = tex.value;
                    content.appendChild(text);
                    var current = new Date();
                    var hour = (current.getHours()%12).toString();
                    var minute = current.getMinutes().toString();
                    var second = current.getSeconds().toString();
                    var day = current.getDate().toString();
                    var month = current.getMonth().toString();
                    var year = current.getFullYear().toString();
                    if (hour.length == 1) {
                        hour = "0" + hour;
                    }
                    if (minute.length == 1) {
                        minute = "0" + minute;
                    }
                    if (second.length == 1) {
                        second = "0" + second;
                    }
                    if (day.length == 1) {
                        day = "0" + day;
                    }
                    if (month.length == 1) {
                        month = "0" + month;
                    }
                    if (year.length == 1) {
                        year = "000" + year;
                    }
                    var date = day + "/" + month + "/" + year;
                    var time = hour + ":" + minute + ":" + second;
                    if ((current.getHours() >= 0) && (current.getHours()<12)) {
                        time = time + " AM";
                    }
                    else {
                        time = time + " PM";
                    }
                    date_div.innerText = date;
                    time_div.innerText = time;
                }
            })
            del.addEventListener('click', (e) => {
                tasks.removeChild(task);
                noElement -= 1;
                var operation = tasks.querySelectorAll(".task");
                for (let i = 0; i < operation.length; i++){
                    var val = operation[i];
                    var ind_temp = val.getElementsByClassName("index")[0];
                    if (parseInt(ind_temp.innerText) > parseInt(index.innerText)) {
                        var num = parseInt(ind_temp.innerText) - 1;
                        ind_temp.innerText = num.toString();
                    }
                }
            })
        }
    })
})