import { Model } from "./model";

export var locations = {
    data: [
        {
            id: "afwf3jwtdfb",
            start: "Ikole",
            destination: "Akure",
            description: "",
            isDelete: false,
            status: "approved",
            isApproved: "",
            sentForApproval: "",
            dateCreated: "6/20/2023, 10:48:21 PM",
            dateUpdated: "",
        },
        {
            id: "kemf3jwwndb",
            start: "Ikole",
            destination: "Lagos  truncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetrun",
            description: "truncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncatetruncate",
            isDelete: false,
            status: "pending",
            isApproved: "",
            sentForApproval: "",
            dateCreated: "6/20/2023, 10:48:59 PM",
            dateUpdated: "",
        }
    ]
}

export var rates = {
    data: [
        {
            id: "rvxy3jwtdfb",
            price1: "6000",
            price2: "",
            location: {
                id: "",
                start: "Oye/Ikole",
                destination: "Lagos",
                description: "",
                dateCreated: "",
                dateUpdated: "",
                isDelete: false
            },
            status: "approved",
            isApproved: "",
            sentForApproval: "",
            dateCreated: "",
            dateUpdated: "",
        },
        {
            id: "wi0z9p4ufs",
            price1: "3000",
            price2: "3500",
            location: {
                id: "",
                start: "Ikole",
                destination: "Akure",
                description: "",
                dateCreated: "",
                dateUpdated: "",
                isDelete: false
            },
            status: "approved",
            isApproved: true,
            sentForApproval: true,
            dateCreated: "",
            dateUpdated: "",
        },
        {
            id: "9tqc39p1vjt",
            price1: "10101",
            price2: "",
            location: {
                id: "",
                start: "",
                destination: "",
                description: "",
                dateCreated: "",
                dateUpdated: "",
                isDelete: false
            },
            status: "pending",
            isApproved: false,
            sentForApproval: true,
            dateCreated: "",
            dateUpdated: "",
        },
        {
            id: "ntxy5nwtzvs",
            price1: "888",
            price2: "",
            location: {
                id: "",
                start: "Fake rate",
                destination: "",
                description: "",
                dateCreated: "",
                dateUpdated: "",
                isDelete: false
            },
            status: "rejected",
            isApproved: false,
            sentForApproval: true,
            dateCreated: "",
            dateUpdated: "",
        }
    ]
}

export const randomString = () => {
    return Math.random().toString(36).substring(2);
}

export function getIndexByID(id, in_array) {
    var index = -1;
    for (var i = 0; i < in_array.length; ++i) {
        if (in_array[i].id == id) {
            index = i;
            break;
        }
    }

    return index;
}


export function getLength(array, status) {
    array[status] = 0
    
    array.data.forEach((i,j)=>{
        if (i.status == status) array[status]++
    })
    
    return array[status];
}

export const createEntry = (a, b, desc) => {
    var param = m.route.param("urlA");

    if (param == "locations") {
        locations.data.push({
            id: randomString(), //crypto.randomUUID(),
            start: a,
            destination: b,
            description: desc,
            dateCreated: "",
            dateUpdated: "",
            isDelete: false,
            status: "pending",
            isApproved: "",
            sentForApproval: "",
            dateCreated: new Date().toLocaleString(),
            dateUpdated: ""
        })

        // console.log(locations.data.length)
        // console.log(JSON.stringify(locations.data))
       
        // addSuccess('Location has been created');
    } else if (param == "rates") {
        rates.data.push({
            id: randomString(), //crypto.randomUUID(),
            price1: a,
            price2: b,
            location: {
                id: "",
                // start: $("#selectLocation").val().split("to")[0].trim(),
                // destination: $("#selectLocation").val().split("to")[1].trim(),
                description: "",
                dateCreated: "",
                dateUpdated: "",
                isDelete: false
            },
            status: "pending",
            isApproved: false,
            sentForApproval: false,
            dateCreated: new Date().toLocaleString(),
            dateUpdated: ""
        })
        m.route.set((url == "admin" ? "/admin" : "/u") + "/rates/new")
    }
}

export const editEntry = (array) => {
    var urlA = m.route.param("urlA");
    var id = Model.modal.location.id;

    if (urlA == "locations") {
        array.data.map((i, j) => {
            if (i.id == id) {
                locations.data[j].start = Model.modal.location.start;
                locations.data[j].destination = Model.modal.location.destination;
                locations.data[j].description = Model.modal.location.description;
                locations.data[j].status = "pending";
                locations.data[j].dateUpdated = new Date().toLocaleString();
                // m.route.get().slice(1, 6) == "admin" ? (
                //     localStorage.setItem(Model.localStorage.name, JSON.stringify({ id, status })
                //     )) : localStorage.setItem(Model.localStorage.name, JSON.stringify({ id }))
            }
        })
    }
}

export const deleteEntry = (array, id) => {
    var index = getIndexByID(id, array.data);
    array.data.splice(index, 1);

    //  Model.selectAll ? m.route.set(getUsertype() + "/rates", null, { replace: true })
    // : m.route.set(path + "/rates", { selected: Model.data.status.charAt(0).toUpperCase() + Model.data.status.slice(1) }, { replace: true })
// addSuccess('Deleted successfully');
}
