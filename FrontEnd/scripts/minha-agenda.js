const calendar = document.getElementById('calendar');

const today = new Date().toLocaleDateString();
// today = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
calendar.value = today;

const datepicker = new Datepicker(calendar, {
    language: "pt-BR",
    format: 'dd/mm/yyyy',
});


const updateCalendar =()=>{

    const ano = Number(datepicker.getDate("yyyy")), mes = Number(datepicker.getDate("mm"))-1, dia = Number(datepicker.getDate("dd"));

    const dataHoje = new Date(ano, mes, dia).getDate()
    const diaSemHoje = new Date(ano, mes, dia).getDay()

    const dataDomingo = new Date(ano, mes, dataHoje - diaSemHoje)
    const dataSabado = new Date(ano, mes, dataHoje - diaSemHoje + 6)

    const diasSemana = Array(7).fill(0).map((_,i)=>new Date(ano, mes-1, dataDomingo.getDate() + i));

    [...document.querySelectorAll("#dias-numeros *")].slice(1).forEach((e,i)=>e.textContent = diasSemana[i].getDate())

    document.getElementById("domingo-a-sabado").textContent = `${dataDomingo.toLocaleDateString()} a ${dataSabado.toLocaleDateString()}`


}


calendar.addEventListener("changeDate",e=>{
    datepicker.hide();
    updateCalendar();
});

updateCalendar();