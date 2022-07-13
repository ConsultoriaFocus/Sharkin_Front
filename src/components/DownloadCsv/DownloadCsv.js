import React from "react";
import "./DownloadCsv.css";
export default class DownloadCsv extends React.Component {

    diferenca_tempo = (data_sharkin, data_sharkout) => {
        let dif_tempo = data_sharkout.getTime() - data_sharkin.getTime();
        return dif_tempo;

    }

    time_values(_diferenca) {
        const mil = (_diferenca % 1000)
        const sec = ((_diferenca % 60000) - mil) / 1000
        const min = ((_diferenca % 3600000) - (mil) - (sec * 1000)) / 60000
        const hour = ((_diferenca) - (mil) - (sec * 1000) - (min * 60000)) / 3600000;
        return { "hour": hour, "min": min, "sec": sec, "mil": mil }
    }


    getFileFormat = (jsonFile) => {
        let result = "nome;data_sharkin;hora_sharkin;data_sharkout;hora_sharkout;plantao\n";

        jsonFile.map((el) => {
            let diferenca = this.time_values(this.diferenca_tempo(new Date(el.HourSharkin), new Date(el.HourSharkout)));

            result += el.User_Id.name;
            result += ";";
            result += el.HourSharkin.split("T")[0].toString();
            result += ";";
            result += el.HourSharkin.split("T")[1].toString().substring(0, 5);
            result += ";";
            result += el.HourSharkout.split("T")[0].toString();
            result += ";";
            result += el.HourSharkout.split("T")[1].toString().substring(0, 5);
            result += ";";
            result += diferenca.hour + ":" + diferenca.min + ":" + diferenca.sec;
            result += "\n";
        })

        return result;
    }
    downloadTxtFile = () => {
        //console.log(this.getFileFormat(this.props.file));
        const element = document.createElement("a");
        const file = new Blob([this.getFileFormat(this.props.file)], {
            type: 'data:text/csv;charset=utf-8,'    
        });
        element.href = URL.createObjectURL(file);
        element.download = "horarios.csv";
        document.body.appendChild(element);
        element.click();
    };

    render() {
        return (
            <button class="button" onClick={this.downloadTxtFile}>Download planilhas</button>
        );
    }
}