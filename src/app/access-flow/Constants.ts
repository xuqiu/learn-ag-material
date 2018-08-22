export class Constants {
  static staticOptions = {
    serviceMethodOptions:[
      {
        name: "医院服务",
        methods: [
          {name: "获取列表"},
          {name: "获取详情"},
        ]
      },
      {
        name: "科室服务",
        methods: [
          {name: "获取列表"},
          {name: "获取详情"},
        ]
      },
      {
        name: "专家服务",
        methods: [
          {name: "获取列表"},
          {name: "获取详情"},
        ]
      },
    ],
    flowItemType: [
      ["addVar", {
        name: "新增变量",
        type: 1,
      }],
      ["modVar",       {
        name: "修改变量",
        type: 2,
        disabled:true
      },],
      ["wsCall", {
        name: "调用医院接口",
        type: 5,
      }]
    ],
    //};


    //   {
    //     name: "新增模板",
    //   },
    //   {
    //     name: "修改模板",
    //   },
    //   {
    //     name: "套用模板",
    //   },
    //   {
    //     name: "调用医院接口",
    //   },
    // ],
  }

}
