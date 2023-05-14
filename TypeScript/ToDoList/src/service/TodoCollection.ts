import { ItemCounts } from "../model/ItemCounts";
import TodoItem from "../model/TodoItem";

class TodoCollection {
  private nextId: number = 1;

  // number type 의 id 를 key 로 TodoItem class 의 instance를 값으로 갖는 Map 자료구조 itemMap
  private itemMap: Map<number, TodoItem>;

  // TodoItem 클래스의 인스턴스들로 이루어진 array 를 받아 itemMap 의 값을 구성한다.
  constructor(public userName: string, todoItems: TodoItem[] = []) {
    this.itemMap = new Map<number, TodoItem>();
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  // 기존 코드를 map 자료구조의 itemMap 에서 key를 통해 값을 가져오는 get method 를 사용하는 코드로 변경한다.
  getTodoById(id: number): TodoItem | undefined {
    return this.itemMap.get(id);
  }

  // 기존 코드를 map 자료구조의 itemMap 에서 key / value 를 통해 새로운 데이터를 만드는 set method 를 사용하는 코드로 변경한다.
  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  // 신규 메서드
  // includeComplete -> true 인 경우 모든 할일 목록을 반환
  // includeComplete -> false 인 경우 완료 목록을 제외한 할일 목록 반환
  getTodoItem(includeComplete: boolean): TodoItem[] {
    // itemMap 의 value 들을 가져와 array 로 만든 후
    // filter의 callback 함수를 통해 includComplete 이 true 인 경우 모든 item 들을
    // false 인 경우 item.complete 이 false 즉 완료되지 않은 item 들만을 filtering 한다.
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  // 신규 메서드
  //
  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }

  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItem(false).length,
    };
  }

  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

export default TodoCollection;
