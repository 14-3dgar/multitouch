

class multiTouch {
  getInfo() {
    return {
      id: 'multiTouch',
      color1: '#2457b5',
      color2: '#2457b5',
      color3: '#5285e3',
      name: 'Multi-Touch',
      blocks: [
        {
          opcode: 'coord',
          text: 'Coordinate [thing] of finger [target] ',
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
        },

        {
          opcode: 'setDimensions',
          text: 'Set width to [width] and height to [height]',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            width: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '480'
            },
             height: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '360'
            }
          }
        }
        
      ],
      menus: {
          thing: {
            acceptReporters: true,
            items: [
              {
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
  
  coord({ thing, target }) {
    
    let XY = 0;
    let x = 0;
    let y = 0;
    let num = target;

    
        if (thing === "X") {
        return new Promise((resolve, reject) => {
        document.addEventListener("touchmove", function(event) {
        XY = event.touches[num].clientX;
        XY = (XY - w/2);
        resolve(XY);
        });
        });
      };
      if (thing === "Y") {
        return new Promise((resolve, reject) => {
        document.addEventListener("touchmove", function(event) {
        XY = event.touches[num].clientY;
        XY = (XY - h/2) * "-1";
        resolve(XY);
        });
        });
      };
    
  }
  setDimensions ({ width, height }) {
      window.w = width;
      window.h = height;
    }
}

Scratch.extensions.register(new multiTouch());
