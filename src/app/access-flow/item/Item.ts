export class Item{
  getType():string{
    return Reflect.getPrototypeOf(this).constructor.name;
  }

}
