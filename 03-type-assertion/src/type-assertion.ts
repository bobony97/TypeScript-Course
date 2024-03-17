//type assertion
//la aserción de tipo se utiliza para informar al compilador sobre el tipo de una variable cuando el compilador no puede inferirlo de forma automática
//o cuando sabemos más sobre el tipo que TypeScript en ese momento

let channel : any = "Dominicode";
// let channelStr = <string>channel;

let channelStr = channel as string;


