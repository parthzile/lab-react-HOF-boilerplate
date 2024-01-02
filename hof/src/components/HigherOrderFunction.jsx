function HigherOrderFunctions(){

    let userData =  [
        { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
        { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
        { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

    ]
    return(
        <>
            <h1>Display All Items</h1>
            <p>{
                userData.map((element) => {
                    return <div key={`${element.id}`}>
                        <p>{` ID : ${element.id}`}</p>
                        <p>{`Name :${element.name}`}</p>
                        <p>{`User Type ${element.user_type}`}</p>
                    </div>
                })
            }</p>
        </>
    )

}


export default HigherOrderFunctions
