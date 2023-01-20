function Hbd() {
    let name = "신행준 멘토님";
    let birthDay = "12/18";
    let now = new Date();
    let today = `${now.getMonth()+1}/
                    ${now.getDate()}`;
    if (birthDay === today){
        document.write(`${name} 
                    생신축하드려요!!`);
    }
}
Hbd();