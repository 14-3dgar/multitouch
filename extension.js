class multiTouch {
    getInfo() {
        return {
            id: 'multiTouch',
            color1: '#2457b5',
            color2: '#2457b5',
            color3: '#5285e3',
            name: 'Multi-Touch',
            blocks: [{
                opcode: 'coord',
                text: 'Coordenada [thing] del cursor [target] ',
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                    thing: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "X",
                        menu: 'thing'
                    },
                    target: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "0"
                    }
                }
            }],
            menus: {
                thing: {
                    acceptReporters: true,
                    items: [{
                            text: 'X',
                            value: "X"
                        },
                        {
                            text: 'Y',
                            value: "Y"
                        }

                    ]
                }
            }
        };
    }

    coord({
        thing,
        target
    }) {

        let XY = 0;
        let num = target;
        if (thing === "X") {
            return new Promise((resolve, reject) => {
                document.addEventListener("touchmove", function(event) {
                    XY = event.touches[num].clientX;
                    XY = (XY - '240');
                    resolve(XY);
                });
            });
        }

        if (thing === "Y") {
            return new Promise((resolve, reject) => {
                document.addEventListener("touchmove", function(event) {
                    XY = event.touches[num].clientY;
                    XY = (XY - '400') * "-1";
                    resolve(XY);
                });
            });
        }

    }

}

Scratch.extensions.register(new multiTouch());
