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
            menu.remove(menu.selectIndex)
        })
    }
    removeMenu();
// 2
    editTable = () =>{
        let edit = document.getElementById('btn-tabel');
            edit.addEventListener('click', () => {
                let table = document.getElementById('table');
                let row = document.getElementById('row').value;
                let column = document.getElementById('col').value;
                let content = document.getElementById('content').value;
                console.dir(table)
                let last_row = table.rows.length
                if(row > 0){
                    let new_row = table.insertRow(last_row)
                    for(let i =0; i < table.rows[last_row - 1 ].cells.length; i++){
                        new_row.insertCell(i)
                    }
                    // let new_col = table.insertCell(column)
                    // console.dir(table.rows[0])
                    // console.dir(table.rows[0].cells = 4)
                }
                if(column > 0){
                    for(let i=0; i < last_row; i++){
                        
                    }
                }
            })
    }
    editTable()
})