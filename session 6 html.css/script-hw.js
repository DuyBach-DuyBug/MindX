document.addEventListener('DOMContentLoaded',(event)=>{
// 1
    getLink = () =>{
        let href = document.getElementById('demo-a').href;
        let btn = document.getElementById('btn-demo');
        let input = document.getElementById('demo-input');
        btn.addEventListener('click', () => {
            input.value = href
        })
    }
    getLink();
// 1.a
    removeMenu = () =>{
        let menu = document.getElementById('select-menu');
        let btn_remove = document.getElementById('btn-remove');
        btn_remove.addEventListener('click', () => {
            menu.remove(menu.selectedIndex)
        })
    }
    removeMenu();
// 2
    editTable = () =>{
        let edit = document.getElementById('btn-tabel');
            edit.addEventListener('click', () => {
                let table_rows = document.getElementById('table').rows;
                let row = document.getElementById('row').value;
                let column = document.getElementById('col').value;
                let content = document.getElementById('content').value;

                if(row > 0){
                    for(let a =0; a < row; a++){
                        let last_row = document.getElementById('table').rows.length
                        let new_row = document.getElementById('table').insertRow(last_row)
                        for(let i =0; i < table_rows[last_row - 1].cells.length; i++){
                            let new_content = new_row.insertCell(i)
                            new_content.innerHTML = content
                        }
                    }
                }

                if(column > 0){
                    for(let a = 0; a < column; a++){
                        let last_row = document.getElementById('table').rows.length
                        for(let i=0; i < last_row; i++){
                            let last_cell = table_rows[i].cells.length
                            let new_content = table_rows[i].insertCell(last_cell)
                            new_content.innerHTML = content
                        }
                    }
                }
            })
    }
    editTable()
})