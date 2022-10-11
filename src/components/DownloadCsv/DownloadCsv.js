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
            let date_sharkin = new Date(el.HourSharkin);
            let date_sharkout = new Date(el.HourSharkout);
            let diferenca = this.time_values(this.diferenca_tempo(date_sharkin, date_sharkout));
            result += el.User_Id.name;
            result += ";";
            result += date_sharkin.toLocaleDateString("pt-BR");
            result += ";";
            result += date_sharkin.toTimeString("pt-BR").split(' ')[0];
            result += ";";
            result += date_sharkout.toLocaleDateString("pt-BR");
            result += ";";
            result += date_sharkout.toTimeString("pt-BR").split(' ')[0];
            result += ";";
            result += ("0" + diferenca.hour).slice(-2) + ":" + ("0" + diferenca.min).slice(-2) + ":" + ("0" + diferenca.sec).slice(-2);
            result += "\n";
            return el;
        })

        return result;
    }
    downloadTxtFile = () => {
        //console.log(this.getFileFormat(this.props.file));
        const element = document.createElement("a");
        const file = new Blob([this.getFileFormat(this.props.file)], {
            type: "text/plain"
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