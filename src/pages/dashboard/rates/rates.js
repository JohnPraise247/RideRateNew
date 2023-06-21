// import { dSearchInput } from '../components';
// import { ModelDashboardComponent } from '../modelComponents';

const ratesSection = {
  view: () => {
    return m("h1", m.route.get())
  }
}

export default ratesSection;
/*
export const Rates = {
  view:()=>{
    return [
      m(dSearchInput,{id: "rateInput", placeholder: "Search Rates"}),
      m("#list-group.list-group.mt-5",[
        m(ModelDashboardComponent)
        
        
        // m(ModelDashboardComponent, {
        //   name: "rates",
        //   model: Model.rates,
        //   modeltype: Model.rates.approved,
        //   type: "Approved",
        //   title: "Your Entry was approved by the Admin",
        //   prop: ["price1", "location"]
        // }),

        //Pending
        // m(ModelDashboardComponent, {
        //   name: "rates",
        //   model: Model.rates,
        //   modeltype: Model.rates.pending,
        //   type: "Pending",
        //   title: "Waiting for the approval of the Admin",
        //   prop: ["price1", "location"]
        // }),

        // //Rejected
        // m(ModelDashboardComponent,{
        //   name: "rates",
        //   model: Model.rates,
        //   modeltype: Model.rates.rejected,
        //   type: "Rejected",
        //   title: "Your entry was rejected by the Admin",
        //   prop: ["price1","location"]
        // })
      ])
    ]
  }
}*/