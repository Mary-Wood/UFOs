// import data from data.js
const tableData = data; 

// Reference the HTML table using d3
var tbdoy = d2.select("tbody");

function buildTable(data) {
  tbody.html(""); //this is clearing the data file

  //This loops through each object in the data
  //This appends each row and cells for each value in the row
  data.forEach((dataRow) => {
    //This appends the row to the table body
    let row = tbody.append("tr"); //tr tags are used for each row in the table, each object or UFO sitghting in the array will be wrapped in a tr tag
    
    //This loops through each field in the dataTow and adds
    //each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {//here we are telling the code to put each sighting into it's own row of data
        let cell = row.append("td");
        cell.text(val);
    }
    );
});
}

//Here we want to be able to filter the data by date
function handleClick() {
    //This selects the datetime from the filter
    let date = d3.select("datetime").property("value");
    let filteredData  = tableData; 

    //This checks if the date was entered and filters on that information
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Then the table is built or rebuilt with the filtered data 
    //If no data then this should return all the data unfiltered. 
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);