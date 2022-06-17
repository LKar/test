@Directive({
    selector: '[input]',
})
app.filter('dot2comma', [
    function () {
        return function (input) {
            return input.value.toString().replace(',', '.');
        };
    }]);



/*import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
    name: 'input',
})

    app.filter('dot2comma', [
        function () {
            return function (input) {
                return input.value.toString().replace(',', '.');
            };
        }])*/

/*import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'input',
})
export class FactorialPipe implements PipeTransform {
    transform(value: number, args?: any): number {
        app.filter('dot2comma', [
            function () {
                return function (value) {
                    return value.toString().replace(',', '.');
                };
            }]);
    }*/