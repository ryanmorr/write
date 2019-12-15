/*! @ryanmorr/schedule-render v1.0.0 | https://github.com/ryanmorr/schedule-render */function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}(function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a=a||self,b(a.scheduleRender={}))})(this,function(a){'use strict';function b(){if(d=null,null==f)for(;0<g.length;)g.shift().render();else{e=performance.now();do g.shift().render();while(0<g.length&&performance.now()-e<f);0<g.length&&(d=requestAnimationFrame(b))}}function c(){for(d&&cancelAnimationFrame(d);0<g.length;)g.shift().cancel()}var d,e,f=null,g=[];a.clear=c,a.fps=function(a){f="number"==typeof a?1e3/a-6:null},a.scheduleRender=function(a){return new Promise(function(c,e){d||(d=requestAnimationFrame(b)),g.push({render:function(){return c(a())},cancel:e})})},Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVuZGVyLnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3NjaGVkdWxlLXJlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZnJhbWU7XHJcbmxldCBzdGFydDtcclxubGV0IGJ1ZGdldCA9IG51bGw7XHJcbmNvbnN0IGJhdGNoID0gW107XHJcblxyXG4vLyBCcm93c2VyJ3MgcmVxdWlyZSBhcm91bmQgNm1zIHRvIHJlbmRlciBhIGZyYW1lXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcmFpbCNhbmltYXRpb25cclxuY29uc3QgQlJPV1NFUl9SRU5ERVJfVElNRSA9IDY7XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBmcmFtZSA9IG51bGw7XHJcbiAgICBpZiAoYnVkZ2V0ID09IG51bGwpIHtcclxuICAgICAgICB3aGlsZSAoYmF0Y2gubGVuZ3RoID4gMCkgYmF0Y2guc2hpZnQoKS5yZW5kZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGJhdGNoLnNoaWZ0KCkucmVuZGVyKCk7XHJcbiAgICAgICAgfSB3aGlsZSAoYmF0Y2gubGVuZ3RoID4gMCAmJiAoKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpIDwgYnVkZ2V0KSk7XHJcbiAgICAgICAgaWYgKGJhdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcHModmFsdWUpIHtcclxuICAgIGJ1ZGdldCA9ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSA/ICgxMDAwIC8gdmFsdWUpIC0gQlJPV1NFUl9SRU5ERVJfVElNRSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgIGlmIChmcmFtZSkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChiYXRjaC5sZW5ndGggPiAwKSBiYXRjaC5zaGlmdCgpLmNhbmNlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVSZW5kZXIoY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmcmFtZSkge1xyXG4gICAgICAgICAgICBmcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXRjaC5wdXNoKHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoKSA9PiByZXNvbHZlKGNhbGxiYWNrKCkpLFxyXG4gICAgICAgICAgICBjYW5jZWw6IHJlamVjdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJlbmRlciIsImZyYW1lIiwiYnVkZ2V0IiwiYmF0Y2giLCJsZW5ndGgiLCJzaGlmdCIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsIiwidmFsdWUiLCJjYWxsYmFjayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHVzaCJdLCJtYXBwaW5ncyI6IndrQkFTQSxRQUFTQSxDQUFBQSxDQUFULEVBQWtCLElBQ2RDLENBQUssQ0FBRyxLQUNNLElBQVZDLEVBQUFBLE9BQ3NCLENBQWZDLENBQUFBLENBQUssQ0FBQ0MsUUFBWUQsQ0FBSyxDQUFDRSxLQUFORixHQUFjSCxNQUFkRyxPQUN0QixDQUNIRyxDQUFLLENBQUdDLFdBQVcsQ0FBQ0MsR0FBWkQsRUFETCxHQUdDSixDQUFBQSxDQUFLLENBQUNFLEtBQU5GLEdBQWNILE1BQWRHLFNBQ29CLENBQWZBLENBQUFBLENBQUssQ0FBQ0MsTUFBTkQsRUFBc0JJLFdBQVcsQ0FBQ0MsR0FBWkQsR0FBb0JELENBQXBCQyxDQUE2QkwsR0FDekMsQ0FBZkMsQ0FBQUEsQ0FBSyxDQUFDQyxNQUxQLEdBTUNILENBQUssQ0FBR1EscUJBQXFCLENBQUNULENBQUQsQ0FOOUIsR0FlSixRQUFTVSxDQUFBQSxDQUFULEVBQWlCLEtBQ2hCVCxDQURnQixFQUVoQlUsb0JBQW9CLENBQUNWLENBQUQsQ0FGSixDQUlFLENBQWZFLENBQUFBLENBQUssQ0FBQ0MsTUFKTyxFQUlLRCxDQUFLLENBQUNFLEtBQU5GLEdBQWNTLE1BQWRULE1BaEN6QkYsQ0FBQUEsRUFDQUssRUFDQUosQ0FBTSxDQUFHLEtBQ1BDLENBQUssQ0FBRyxtQkFxQlAsU0FBYVUsQ0FBYixDQUFvQixDQUN2QlgsQ0FBTSxDQUFxQixRQUFqQixRQUFPVyxDQUFBQSxDQUFQLENBQThCLElBQU9BLENBQVAsRUFBOUIsQ0FBb0UsdUJBVTNFLFNBQXdCQyxDQUF4QixDQUFrQyxPQUM5QixJQUFJQyxDQUFBQSxPQUFKLENBQVksU0FBQ0MsQ0FBRCxDQUFVQyxDQUFWLENBQXFCLENBQy9CaEIsQ0FEK0IsR0FFaENBLENBQUssQ0FBR1EscUJBQXFCLENBQUNULENBQUQsQ0FGRyxFQUlwQ0csQ0FBSyxDQUFDZSxJQUFOZixDQUFXLENBQ1BILE1BQU0sQ0FBRSxpQkFBTWdCLENBQUFBLENBQU8sQ0FBQ0YsQ0FBUSxFQUFULENBRGQsQ0FBQSxDQUVQRixNQUFNLENBQUVLLENBRkQsQ0FBWGQsQ0FKRyxDQUFBIn0=
