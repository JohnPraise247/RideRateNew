import { Model } from '../../model';

const crSearchInput = {
  view: ({ attrs: { id, placeholder }, state: { input, filter, div, list } }) => {
    return m(".input-group.mt-3",[
      m("input.form-control[type='text'][placeholder='"+placeholder+"']",{
        id: id,
        onkeyup:()=>{
          input = document.getElementById(id);
          filter = input.value.toUpperCase();
          div = document.getElementById("list-group");
          list = div.getElementsByClassName("list-group-item");

          for (var i = 0; i < list.length; i++) {
            var a = list[i].getElementsByClassName("w-100")[0];
            var txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              list[i].classList.remove("d-none");
              list[i].classList.add("d-flex");
            } else {
              list[i].classList.add("d-none");
              list[i].classList.remove("d-flex");
            }
            // console.log(txtValue.toUpperCase().indexOf(filter));
          }
          m.redraw()
        }
      }),
      m("span.input-group-addon", m("i.bx.bx-search-alt"))
    ])
  }
}



const CheckRatesMain = {
    view:()=>{
      return m(".main",//.check-rates
      m("section", 
        m(".container.pt-5", [
          m("span.label.label-warning", "This page is under development"),
          m(crSearchInput,{id: "crlocationInput", placeholder: "Search Locations"}),
          m("#list-group.list-group.mt-5",[
            Model.locations.list.map((i)=>{
              return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{
                onclick:()=>{ 
                  /*Model.edit(i.from, i.to, i.desc)*/ 
                }
              },[
                m(".name-icon.icon-blue", m("i.bx"+Model.icon.location)),
                m(".w-100.d-flex.flex-direction-column[style=cursor:pointer]",[
                  m("h5.list-group-item-heading", i.from +" to "+ i.to),
                  m("small.text-muted", i.desc)
                ])
              ])
            })
          ])
        ])
      )
    )
  }
}

export default CheckRatesMain;