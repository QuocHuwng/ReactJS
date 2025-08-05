function typeConsole(type = "log") {
    console[type](`Day la type: ${type}`);   
}
typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();