var config = {
    name: 'Halo Client V1',
    hotkeys: {
        unlock_items: 'f',
        set_money: 'h',
        open_cases: 'j'
    }
}

var modules = {
    unlock_items: function() {
        for (var i = 0; i < items.length; ++i) {
            userdata.inv.push(items[i])
        }
    },
    set_money: function() {
        var c = prompt("[" + config.name + "] Edit Money", "1000");
        if (c) {
            userdata.money = parseInt(c)
            alert("[" + config.name + "] Money set to " + c)
        }
    },
    open_cases: function() {
        for (var i = 0; i < userdata.inv.length; ++i) {
            if (userdata.inv[i].name.toLowerCase().includes('case') || userdata.inv[i].name.toLowerCase().includes('collection')) {
                openCase(userdata.inv[i].case, 5);
            }
        }
    },
}
alert("-" + config.name + "-\n\nUnlock Items: " + config.hotkeys.unlock_items + "\nSet Money: " + config.hotkeys.set_money + "\nOpen Cases: " + config.hotkeys.open_cases + "\nHelp: " + 'r');
document.addEventListener('keypress', function(e) {
    var key = e.key;
    if (key == config.hotkeys.unlock_items) {
        modules.unlock_items();
    }
    if (key == config.hotkeys.set_money) {
        modules.set_money();
    }
    if (key == config.hotkeys.open_cases) {
        modules.open_cases();
    }

    if (key == 'r') {
        alert("-" + config.name + "-\n\nUnlock Items: " + config.hotkeys.unlock_items + "\nSet Money: " + config.hotkeys.set_money + "\nOpen Cases: " + config.hotkeys.open_cases + "\nHelp: " + 'r');
    }
});
