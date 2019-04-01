salesByWeek.forEach(item => {
    //iterate through each and get sales agent object, and get name value stored.
    const firstName = item.sales_agent.first_name
    const lastName = item.sales_agent.last_name
    //(key, value1, value2, type, boolean for divider line)
    createEntry(undefined, firstName, lastName, "h2", false)
    //interate through each and get car information, get each value and key stored in that object.
    for (entry of Object.entries(item.vehicle)) {
        createEntry(entry[0], entry[1], undefined, "div", false);
    }
    //iterate through each and get gross profit object. Get value.
    const profit = item.gross_profit
    createEntry("Profit", profit, undefined, "h3", true);

    //Append assembled HTML on document fragment to DOM.
    const container = document.getElementById("display-container");
    container.appendChild(fragment);
})