import Vue from "vue";
import TMessage from "./TMessage.vue";

const TMessageClass = Vue.extend(TMessage);

/*
    工厂函数
    创建一个Tmessage组件对象
    管理message组件对象队列
*/

let instances = [];

function Message(data) {
  data = data || {};
  if (typeof data === "string") {
    data = {
      message: data,
    };
  }
  let instance = new TMessageClass({
    data,
  });

  data.onClose = function() {
    Message.close(instance);
  };

  instance.$mount();
  document.body.appendChild(instance.$el);

  let offset = data.offset || 20;
  let offsetTop = offset;
  instances.forEach((item) => {
    offsetTop += item.$el.offsetHeight + offset;
  });

  instance.$el.style.top = offsetTop + "px";
  instances.push(instance);
}

Message.close = function(instance) {
  /*
        获取当前这个instance的高度

        吧这个instance后面的所有实例的top减去这个高度，再减去偏移值
    */

  let removeHeight = instance.$el.offsetHeight + instance.offset;
  let index = instances.findIndex((item) => item === instance);
  instances = instances.filter((item) => item !== instance);
  for (let i = index; i < instances.length; i++) {
    instances[i].$el.style.top =
      parseFloat(instance.$el.style.top) - removeHeight + "px";
  }
};

["info", "success", "error", "warning"].forEach((type) => {
  Message[type] = function(data) {
    if (typeof data === "string") {
      data = {
        message: data,
      };
    }
    data.type = type;
    console.log(data);
    return Message(data);
  };
});

export default Message;
