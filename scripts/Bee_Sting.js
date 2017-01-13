
          var renderer = new PIXI.autoDetectRenderer(window.innerWidth, 600,{backgroundColor : 0x000000})
        	document.body.appendChild(renderer.view);

          var stage = new PIXI.Container(0x000000);

          var socket = io();

          var graphics = new PIXI.Graphics()

          var points = [];
          var pointSpacing = 10;

          animate();

          function animate() {
            requestAnimationFrame( animate );
            renderer.render(stage);
          }

          socket.on('mood data', function(msg){
            // $('#messages').append($('<li>').text(msg));
            points.push(msg);
            // console.log('recieved: ' + msg);
            // console.log('length: ' + points.length + ' value: ')
            graphics.clear();
            graphics.beginFill(0xFF0000);

            var pointScreenIndex = 0;
            if(points.length > renderer.width) {
              pointScreenIndex = points.length - renderer.width;
            }

            for(var i = pointScreenIndex; i < points.length; i++) {
              graphics.lineStyle(2, 0xFF0000);

              // Drae lines between points
              if( i > 0) {
                graphics.moveTo(renderer.width - ((points.length - (i-1)) * pointSpacing), (points[i - 1] * renderer.height) / 1024);
                graphics.lineTo(renderer.width - ((points.length - i) * pointSpacing), (points[i] * renderer.height) / 1024);
              }

              // Draw points
              graphics.drawCircle(window.innerWidth - ((points.length - i) * pointSpacing), (points[i] * renderer.height) / 1024, 2);
              // console.log('stage.height: ' + stage.height)

            }
            stage.addChild(graphics);



          });
        </script>

        <button id="save_button" type="button">Save Data</button>

      </body>
    </html>
