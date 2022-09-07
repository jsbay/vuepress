const e=JSON.parse('{"key":"v-0be500e6","path":"/weixin/regex.html","title":"\u5389\u5BB3\uFF01\u8FD9\u7BC7\u6B63\u5219\u8868\u8FBE\u5F0F\u7ADF\u5199\u7684\u5982\u6B64\u8BE6\u5C3D","lang":"zh-CN","frontmatter":{"summary":"\u5389\u5BB3\uFF01\u8FD9\u7BC7\u6B63\u5219\u8868\u8FBE\u5F0F\u7ADF\u5199\u7684\u5982\u6B64\u8BE6\u5C3D \u524D\u8A00 \u4E3A\u4EC0\u4E48\u8981\u5B66\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1F \u4F5C\u4E3A\u4E00\u4E2A\u83DC\u9E1F\u7A0B\u5E8F\u5458\uFF0C\u9047\u5230\u590D\u6742\u7684\u6B63\u5219\u65F6\u5F80\u5F80\u4F1A\u6C42\u52A9\u641C\u7D22\u5F15\u64CE\u3002\u867D\u7136\u80FD\u591F\u89E3\u51B3\u71C3\u7709\u4E4B\u6025\uFF0C\u4F46\u5F80\u5F80\u4F1A\u6709\\\\[\u8FB9\u754C\u503C\\\\] https://blog.csdn.net/weixin\\\\_33994444/article/details/93408973 \u548C\u56E2\u961F\u6B63\u5219\u4E0D\u7EDF\u4E00\u7684\u95EE\u9898\u3002\u800C\u8FD9\u79CD\u95EE\u9898\u5F80\u5F80\u4F1A\u88AB\u7EC6\u6D4B\u6D4B\u51FA\u6765\uFF0C\u9020\u6210\u4E0D\u5FC5","head":[["meta",{"property":"og:url","content":"https://jsbay.github.io/vuepress/vuepress/weixin/regex.html"}],["meta",{"property":"og:site_name","content":"Bay\u4E36"}],["meta",{"property":"og:title","content":"\u5389\u5BB3\uFF01\u8FD9\u7BC7\u6B63\u5219\u8868\u8FBE\u5F0F\u7ADF\u5199\u7684\u5982\u6B64\u8BE6\u5C3D"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://jsbay.github.io/vuepress/vuepress/"}],["meta",{"property":"og:updated_time","content":"2022-08-17T06:16:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"\u5389\u5BB3\uFF01\u8FD9\u7BC7\u6B63\u5219\u8868\u8FBE\u5F0F\u7ADF\u5199\u7684\u5982\u6B64\u8BE6\u5C3D"}],["meta",{"property":"article:modified_time","content":"2022-08-17T06:16:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u6B63\u5219\u8868\u8FBE\u5F0F","link":"#\u4E3A\u4EC0\u4E48\u8981\u5B66\u6B63\u5219\u8868\u8FBE\u5F0F","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1F","slug":"\u4EC0\u4E48\u662F\u6B63\u5219\u8868\u8FBE\u5F0F","link":"#\u4EC0\u4E48\u662F\u6B63\u5219\u8868\u8FBE\u5F0F","children":[]},{"level":2,"title":"\u600E\u4E48\u68C0\u6D4B\u6211\u7684\u6B63\u5219\u5BF9\u4E0D\u5BF9\u5462\uFF1F","slug":"\u600E\u4E48\u68C0\u6D4B\u6211\u7684\u6B63\u5219\u5BF9\u4E0D\u5BF9\u5462","link":"#\u600E\u4E48\u68C0\u6D4B\u6211\u7684\u6B63\u5219\u5BF9\u4E0D\u5BF9\u5462","children":[{"level":3,"title":"\u7F16\u8F91\u5668\u5185\u7F6E\u7684\u641C\u7D22\u5DE5\u5177","slug":"\u7F16\u8F91\u5668\u5185\u7F6E\u7684\u641C\u7D22\u5DE5\u5177","link":"#\u7F16\u8F91\u5668\u5185\u7F6E\u7684\u641C\u7D22\u5DE5\u5177","children":[]},{"level":3,"title":"\u51FD\u6570\u8C03\u7528","slug":"\u51FD\u6570\u8C03\u7528","link":"#\u51FD\u6570\u8C03\u7528","children":[]},{"level":3,"title":"\u5728\u7EBF\u6D4B\u8BD5\u7F51\u7AD9","slug":"\u5728\u7EBF\u6D4B\u8BD5\u7F51\u7AD9","link":"#\u5728\u7EBF\u6D4B\u8BD5\u7F51\u7AD9","children":[]}]},{"level":2,"title":"\u57FA\u7840","slug":"\u57FA\u7840","link":"#\u57FA\u7840","children":[{"level":3,"title":"\u9650\u5B9A\u7B26 (Quantifiers)","slug":"\u9650\u5B9A\u7B26-quantifiers","link":"#\u9650\u5B9A\u7B26-quantifiers","children":[]},{"level":3,"title":"\u6216\u8FD0\u7B97\u7B26 (OR Operator)","slug":"\u6216\u8FD0\u7B97\u7B26-or-operator","link":"#\u6216\u8FD0\u7B97\u7B26-or-operator","children":[]},{"level":3,"title":"\u5B57\u7B26\u7C7B(Character class)","slug":"\u5B57\u7B26\u7C7B-character-class","link":"#\u5B57\u7B26\u7C7B-character-class","children":[]},{"level":3,"title":"\u5143\u5B57\u7B26 (Meta character)","slug":"\u5143\u5B57\u7B26-meta-character","link":"#\u5143\u5B57\u7B26-meta-character","children":[]}]},{"level":2,"title":"\u9AD8\u7EA7\u6982\u5FF5","slug":"\u9AD8\u7EA7\u6982\u5FF5","link":"#\u9AD8\u7EA7\u6982\u5FF5","children":[{"level":3,"title":"\u61D2\u60F0\u5339\u914D\u548C\u8D2A\u5A6A\u5339\u914D (Lazy and Greed)","slug":"\u61D2\u60F0\u5339\u914D\u548C\u8D2A\u5A6A\u5339\u914D-lazy-and-greed","link":"#\u61D2\u60F0\u5339\u914D\u548C\u8D2A\u5A6A\u5339\u914D-lazy-and-greed","children":[]},{"level":3,"title":"\u5206\u7EC4 (Group)","slug":"\u5206\u7EC4-group","link":"#\u5206\u7EC4-group","children":[]},{"level":3,"title":"\u975E\u6355\u83B7\u5206\u7EC4 (Non-capture Group)","slug":"\u975E\u6355\u83B7\u5206\u7EC4-non-capture-group","link":"#\u975E\u6355\u83B7\u5206\u7EC4-non-capture-group","children":[]},{"level":3,"title":"\u56DE\u6EAF (Flash Back)","slug":"\u56DE\u6EAF-flash-back","link":"#\u56DE\u6EAF-flash-back","children":[]},{"level":3,"title":"\u65AD\u8A00 (Assertion)","slug":"\u65AD\u8A00-assertion","link":"#\u65AD\u8A00-assertion","children":[]}]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[{"level":3,"title":"test()","slug":"test","link":"#test","children":[]},{"level":3,"title":"exec()","slug":"exec","link":"#exec","children":[]}]},{"level":2,"title":"\u914D\u5408 String \u63D0\u4F9B\u7684\u65B9\u6CD5","slug":"\u914D\u5408-string-\u63D0\u4F9B\u7684\u65B9\u6CD5","link":"#\u914D\u5408-string-\u63D0\u4F9B\u7684\u65B9\u6CD5","children":[{"level":3,"title":"match","slug":"match","link":"#match","children":[]},{"level":3,"title":"replace","slug":"replace","link":"#replace","children":[]},{"level":3,"title":"split","slug":"split","link":"#split","children":[]}]},{"level":2,"title":"\u6B63\u5219\u8868\u8FBE\u5F0F\u517C\u5BB9\u6027\u8C03\u7814","slug":"\u6B63\u5219\u8868\u8FBE\u5F0F\u517C\u5BB9\u6027\u8C03\u7814","link":"#\u6B63\u5219\u8868\u8FBE\u5F0F\u517C\u5BB9\u6027\u8C03\u7814","children":[{"level":3,"title":"@@split","slug":"split-1","link":"#split-1","children":[]},{"level":3,"title":"@@match","slug":"match-1","link":"#match-1","children":[]},{"level":3,"title":"@@search","slug":"search","link":"#search","children":[]},{"level":3,"title":"@@replace","slug":"replace-1","link":"#replace-1","children":[]},{"level":3,"title":"flags","slug":"flags","link":"#flags","children":[]},{"level":3,"title":"dotAll","slug":"dotall","link":"#dotall","children":[]}]},{"level":2,"title":"\u5E72\u8D27","slug":"\u5E72\u8D27","link":"#\u5E72\u8D27","children":[{"level":3,"title":"\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570\u7684\u4EF7\u683C\u8F93\u5165\u6846","slug":"\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570\u7684\u4EF7\u683C\u8F93\u5165\u6846","link":"#\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570\u7684\u4EF7\u683C\u8F93\u5165\u6846","children":[]},{"level":3,"title":"\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F","slug":"\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F","link":"#\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F","children":[]},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}]}],"git":{"createdTime":1660717014000,"updatedTime":1660717014000,"contributors":[{"name":"\u767D\u6218\u8425","email":"13140111181@163.com","commits":1}]},"readingTime":{"minutes":10.62,"words":3185},"filePathRelative":"weixin/regex.md","localizedDate":"2022\u5E748\u670817\u65E5"}');export{e as data};
