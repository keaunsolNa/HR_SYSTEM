function GetDate() {

    const getTime = () => {

        let offset = new Date().getTimezoneOffset() * 60000 ; 
        let dateOffset = new Date(Date.now() - offset).toISOString(); 
        const [year, month, day] = [dateOffset.slice(0,4),dateOffset.slice(5,7),dateOffset.slice(8,10)]
        const datePrefix = `${year}.${month}.${day}`; 

        console.log(datePrefix)
        return datePrefix;
    }
    
    return (
        getTime().toString()
    );
}

export default GetDate;

