import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        return `这是管道${value}测试案例`;
    }
}