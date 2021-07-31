/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var img = document.querySelector("img");
var input = document.querySelector("input");
var findButton = document.querySelector("button");
img.src = "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif";

function SearchForGif() {
  if (input.value === "") return alert("Please input something, don't try to break the fucking system");
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=PqHv59WbAiJybaGF4QE0hCZCIEY3b0rS&s=".concat(input.value), {
    mode: "cors"
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    console.log(response);
    img.src = response.data.images.downsized.url;
  }).catch(function (err) {
    return new Error(err);
  });
}

findButton.addEventListener("click", SearchForGif);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQSxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsSUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbkI7QUFFQUYsR0FBRyxDQUFDSyxHQUFKLEdBQVUsMkRBQVY7O0FBRUEsU0FBU0MsWUFBVCxHQUNBO0FBQ0MsTUFBSUgsS0FBSyxDQUFDSSxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCLE9BQU9DLEtBQUssQ0FBQywrREFBRCxDQUFaO0FBQ3hCQyxFQUFBQSxLQUFLLDhGQUF1Rk4sS0FBSyxDQUFDSSxLQUE3RixHQUFzRztBQUFDRyxJQUFBQSxJQUFJLEVBQUU7QUFBUCxHQUF0RyxDQUFMLENBQ0VDLElBREYsQ0FDTyxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQURmLEVBRUVGLElBRkYsQ0FFTyxVQUFBQyxRQUFRLEVBQ2Q7QUFDQ0UsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDQVosSUFBQUEsR0FBRyxDQUFDSyxHQUFKLEdBQVVPLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxNQUFkLENBQXFCQyxTQUFyQixDQUErQkMsR0FBekM7QUFDQSxHQU5GLEVBT0VDLEtBUEYsQ0FPUSxVQUFBQyxHQUFHO0FBQUEsV0FBSSxJQUFJQyxLQUFKLENBQVVELEdBQVYsQ0FBSjtBQUFBLEdBUFg7QUFRQTs7QUFFRGpCLFVBQVUsQ0FBQ21CLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDakIsWUFBckMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dpcGh5LWFwaS10ZXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IGZpbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG5pbWcuc3JjID0gXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9sMEhsUm5BV1h4bjBNaEtMSy9naXBoeS5naWZcIjtcblxuZnVuY3Rpb24gU2VhcmNoRm9yR2lmKClcbntcblx0aWYgKGlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5wdXQgc29tZXRoaW5nLCBkb24ndCB0cnkgdG8gYnJlYWsgdGhlIGZ1Y2tpbmcgc3lzdGVtXCIpO1xuXHRmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9UHFIdjU5V2JBaUp5YmFHRjRRRTBoQ1pDSUVZM2IwclMmcz0ke2lucHV0LnZhbHVlfWAsIHttb2RlOiBcImNvcnNcIn0pXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdC50aGVuKHJlc3BvbnNlID0+IFxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdGltZy5zcmMgPSByZXNwb25zZS5kYXRhLmltYWdlcy5kb3duc2l6ZWQudXJsO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGVyciA9PiBuZXcgRXJyb3IoZXJyKSk7XG59XG5cbmZpbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFNlYXJjaEZvckdpZik7XG4iXSwibmFtZXMiOlsiaW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJmaW5kQnV0dG9uIiwic3JjIiwiU2VhcmNoRm9yR2lmIiwidmFsdWUiLCJhbGVydCIsImZldGNoIiwibW9kZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImltYWdlcyIsImRvd25zaXplZCIsInVybCIsImNhdGNoIiwiZXJyIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==