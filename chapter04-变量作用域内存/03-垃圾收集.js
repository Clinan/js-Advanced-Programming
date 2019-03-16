// js 的垃圾收集
// 垃圾收集器会按照固定的时间间隔（或代码中预定的收集时间）周期性地执行这一操作。
// 浏览器实现垃圾回收通常有两种策略。
// 1.标记清除
/*
    最常用。
    当变量进入环境（在函数中声明一个变量）时，就将这个变量标记为“进入环境”。
    从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能用到他们。而当变量离开环境时，
    则将其标记为“离开环境”。
    可以使用任何方式来标记变量。如，可以通过翻转某个特殊的位来记录一个变量何时进入环境，或者使用一个“进入环境的”变量列表及一个
    “离开环境的”变量列表来跟踪哪个变量发生了变化。
    垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。
    而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，
    销毁那些带标记的指并回收它们所占用的内存空间。
*/
// 2.引用计数
/*
    基本没人用了，循环对象引用时，存在bug
*/

// 性能问题
// 回收工作量巨大

// 管理内存
// 手动解除对象引用
// obj = null; //方便垃圾收集器