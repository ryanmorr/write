/*! @ryanmorr/schedule-render v1.0.0 | https://github.com/ryanmorr/schedule-render */var frame,start,budget=null,batch=[],BROWSER_RENDER_TIME=6;function render(){if(frame=null,null==budget)for(;0<batch.length;)batch.shift().render();else{start=performance.now();do batch.shift().render();while(0<batch.length&&performance.now()-start<budget);0<batch.length&&(frame=requestAnimationFrame(render))}}function fps(a){budget="number"==typeof a?1e3/a-BROWSER_RENDER_TIME:null}function clear(){for(frame&&cancelAnimationFrame(frame);0<batch.length;)batch.shift().cancel()}function scheduleRender(a){return new Promise(function(b,c){frame||(frame=requestAnimationFrame(render)),batch.push({render:function(){return b(a())},cancel:c})})}export{clear,fps,scheduleRender};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVuZGVyLmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3NjaGVkdWxlLXJlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZnJhbWU7XHJcbmxldCBzdGFydDtcclxubGV0IGJ1ZGdldCA9IG51bGw7XHJcbmNvbnN0IGJhdGNoID0gW107XHJcblxyXG4vLyBCcm93c2VyJ3MgcmVxdWlyZSBhcm91bmQgNm1zIHRvIHJlbmRlciBhIGZyYW1lXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcmFpbCNhbmltYXRpb25cclxuY29uc3QgQlJPV1NFUl9SRU5ERVJfVElNRSA9IDY7XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBmcmFtZSA9IG51bGw7XHJcbiAgICBpZiAoYnVkZ2V0ID09IG51bGwpIHtcclxuICAgICAgICB3aGlsZSAoYmF0Y2gubGVuZ3RoID4gMCkgYmF0Y2guc2hpZnQoKS5yZW5kZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGJhdGNoLnNoaWZ0KCkucmVuZGVyKCk7XHJcbiAgICAgICAgfSB3aGlsZSAoYmF0Y2gubGVuZ3RoID4gMCAmJiAoKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpIDwgYnVkZ2V0KSk7XHJcbiAgICAgICAgaWYgKGJhdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcHModmFsdWUpIHtcclxuICAgIGJ1ZGdldCA9ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSA/ICgxMDAwIC8gdmFsdWUpIC0gQlJPV1NFUl9SRU5ERVJfVElNRSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgIGlmIChmcmFtZSkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChiYXRjaC5sZW5ndGggPiAwKSBiYXRjaC5zaGlmdCgpLmNhbmNlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVSZW5kZXIoY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmcmFtZSkge1xyXG4gICAgICAgICAgICBmcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXRjaC5wdXNoKHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoKSA9PiByZXNvbHZlKGNhbGxiYWNrKCkpLFxyXG4gICAgICAgICAgICBjYW5jZWw6IHJlamVjdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZyYW1lIiwic3RhcnQiLCJidWRnZXQiLCJiYXRjaCIsIkJST1dTRVJfUkVOREVSX1RJTUUiLCJyZW5kZXIiLCJsZW5ndGgiLCJzaGlmdCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnBzIiwidmFsdWUiLCJjbGVhciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsIiwic2NoZWR1bGVSZW5kZXIiLCJjYWxsYmFjayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHVzaCJdLCJtYXBwaW5ncyI6IndGQUFJQSxDQUFBQSxNQUNBQyxNQUNBQyxNQUFNLENBQUcsS0FDUEMsS0FBSyxDQUFHLEdBSVJDLG1CQUFtQixDQUFHLEVBRTVCLFFBQVNDLENBQUFBLE1BQVQsRUFBa0IsSUFDZEwsS0FBSyxDQUFHLEtBQ00sSUFBVkUsRUFBQUEsWUFDc0IsQ0FBZkMsQ0FBQUEsS0FBSyxDQUFDRyxRQUFZSCxLQUFLLENBQUNJLEtBQU5KLEdBQWNFLE1BQWRGLE9BQ3RCLENBQ0hGLEtBQUssQ0FBR08sV0FBVyxDQUFDQyxHQUFaRCxFQURMLEdBR0NMLENBQUFBLEtBQUssQ0FBQ0ksS0FBTkosR0FBY0UsTUFBZEYsU0FDb0IsQ0FBZkEsQ0FBQUEsS0FBSyxDQUFDRyxNQUFOSCxFQUFzQkssV0FBVyxDQUFDQyxHQUFaRCxHQUFvQlAsS0FBcEJPLENBQTZCTixRQUN6QyxDQUFmQyxDQUFBQSxLQUFLLENBQUNHLE1BTFAsR0FNQ04sS0FBSyxDQUFHVSxxQkFBcUIsQ0FBQ0wsTUFBRCxDQU45QixHQVdKLFFBQVNNLENBQUFBLEdBQVQsQ0FBYUMsQ0FBYixDQUFvQixDQUN2QlYsTUFBTSxDQUFxQixRQUFqQixRQUFPVSxDQUFBQSxDQUFQLENBQThCLElBQU9BLENBQVAsQ0FBZ0JSLG1CQUE5QyxDQUFvRSxLQUdsRixRQUFnQlMsQ0FBQUEsS0FBaEIsRUFBd0IsS0FDaEJiLEtBRGdCLEVBRWhCYyxvQkFBb0IsQ0FBQ2QsS0FBRCxDQUZKLENBSUUsQ0FBZkcsQ0FBQUEsS0FBSyxDQUFDRyxNQUpPLEVBSUtILEtBQUssQ0FBQ0ksS0FBTkosR0FBY1ksTUFBZFosR0FHdEIsUUFBU2EsQ0FBQUEsY0FBVCxDQUF3QkMsQ0FBeEIsQ0FBa0MsT0FDOUIsSUFBSUMsQ0FBQUEsT0FBSixDQUFZLFNBQUNDLENBQUQsQ0FBVUMsQ0FBVixDQUFxQixDQUMvQnBCLEtBRCtCLEdBRWhDQSxLQUFLLENBQUdVLHFCQUFxQixDQUFDTCxNQUFELENBRkcsRUFJcENGLEtBQUssQ0FBQ2tCLElBQU5sQixDQUFXLENBQ1BFLE1BQU0sQ0FBRSxpQkFBTWMsQ0FBQUEsQ0FBTyxDQUFDRixDQUFRLEVBQVQsQ0FEZCxDQUFBLENBRVBGLE1BQU0sQ0FBRUssQ0FGRCxDQUFYakIsQ0FKRyxDQUFBIn0=
