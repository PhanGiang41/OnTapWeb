const quizData = [
  {
    q: "Để thiết lập hình nền cho bảng (`table`), cách nào đúng theo `HTML hiện đại`?",
    options: {
      A: "Dùng CSS background cho table",
      B: "Cả a và b đúng",
      C: "`Dùng thuộc tính background trong thẻ <table>`",
      D: "`Dùng thuộc tính bgcolor trong thẻ <table>`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Trong danh sách không thứ tự <ul> muốn sử dụng 1 hình ảnh khác làm biểu tượng thì phải làm sao?",
    options: {
      A: "Dùng thuộc tính list-style-image",
      B: "Không thay đổi được",
      C: "Thay đổi thuộc tính type",
      D: "Thay đổi thuộc tính src"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thẻ <dl>…</dl> là danh sách gì?",
    options: {
      A: "Có thứ tự",
      B: "Tất cả đều sai",
      C: "Không có thứ tự",
      D: "Mô tả/Định nghĩa"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Mã màu `#ffffff` là màu gì?",
    options: {
      A: "blue",
      B: "green",
      C: "Mã màu #ffffff là màu gì?",
      D: "black"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Đoạn mã `X<sub><u>2</u></sub>` xuất ra trình duyệt là gì?",
    options: {
      A: "X2",
      B: "X2",
      C: "X2",
      D: "X2"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính nào xác định tốc độ chuyển động của thẻ <marquee>?",
    options: {
      A: "direction",
      B: "loop",
      C: "scrollamount",
      D: "behavior"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Nếu viết padding: 20px 40px 30px thì padding-left và padding-right là bao nhiêu?",
    options: {
      A: "20px – 40px",
      B: "20px – 30px",
      C: "40px – 30px",
      D: "40px – 40px"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính HTML dùng để viết inline CSS là:",
    options: {
      A: "class",
      B: "style",
      C: "css",
      D: "font"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Thuộc tính nào thay đổi kích cỡ chữ?",
    options: {
      A: "text-style",
      B: "text-size",
      C: "font-size",
      D: "font-style"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để tạo ô nhập liệu nhiều dòng, dùng thẻ nào?",
    options: {
      A: "`<textarea></textarea>`",
      B: "`<text></text>`",
      C: "`<input type=\"text\">`",
      D: "`<input type=\"multitext\">`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để upload file bằng form, cần thiết lập thuộc tính nào đúng?",
    options: {
      A: "enctype=\"multipart/file\" và method=\"post\"",
      B: "Tất cả đều đúng",
      C: "enctype=\"multipart/form-data\" và method=\"get\"",
      D: "enctype=\"multipart/form-data\" và method=\"post\""
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thêm thuộc tính nào vào <input type=”text” …> để không cho người dùng thay đổi giá trị của nó nhưng vẫn gửi dữ liệu lên server.",
    options: {
      A: "readonly",
      B: "change-value=\"no\"",
      C: "enable=\"false\"",
      D: "locked"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để đánh dấu bookmark (liên kết trong) ta sử dụng cách nào sau đây?`(chọn 2 đáp án)`",
    options: {
      A: "`<a name=” # tên_bookmark”>…</a>`",
      B: "`<p id=”tên_bookmark”>…</p>`",
      C: "`<a name=”tên_bookmark”>…</a>`",
      D: "`<p id=” # tên_bookmark”>…</p>`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào định dạng đối tường nằm một hàng riêng biệt?",
    options: {
      A: "`display: inline`",
      B: "`display: inline-block`",
      C: "`display: none`",
      D: "`display: block`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đoạn mã `This is a <span>sentence</span>` xuất ra trình duyệt là gì?",
    options: {
      A: "This is a **sentence**",
      B: "This is a sentence",
      C: "This is a sentence",
      D: "This is a sentence"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Thuộc tính nào canh chỉnh nội dung các ô theo chiều dọc trong <table> ?",
    options: {
      A: "halign",
      B: "text-align",
      C: "align",
      D: "valign"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đâu là cú pháp chú thích đúng trong CSS?",
    options: {
      A: "`// ...`",
      B: "Tất cả đều đúng",
      C: "`/* ... */`",
      D: "`// ...`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Bạn cảm thấy việc ôn trắc nghiệm thế này có hữu ích không?",
    options: {
      A: "Bình thường",
      B: "Không nên ôn",
      C: "Hữu ích",
      D: "Không hữu ích"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Thuộc tính màu nền trong <table> là?",
    options: {
      A: "bgcolor",
      B: "background-image",
      C: "background",
      D: "bordercolor"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính nào trong CSS dùng để định dạng chữ nghiêng?",
    options: {
      A: "italic",
      B: "font-style",
      C: "text-decoration",
      D: "text-transform"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Đâu là tag tạo ra 1 danh sách đứng đầu bởi dấu chấm • ?",
    options: {
      A: "`<ol>`",
      B: "`<dl>`",
      C: "`<ul>`",
      D: "`<list>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để các nút `radio` chỉ chọn được một trong nhiều lựa chọn, cần:",
    options: {
      A: "Cùng name",
      B: "Cùng value",
      C: "Cùng id",
      D: "Cùng class"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Đâu là tag tạo ra 1 danh sách đứng đầu bằng số?",
    options: {
      A: "`<ol>`",
      B: "`<dl>`",
      C: "`<ul>`",
      D: "`<list>`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để chọn sẵn một option trong thẻ `<select>`, cần dùng thuộc tính nào?",
    options: {
      A: "select",
      B: "check",
      C: "selected",
      D: "checked"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để mở liên kết trong một cửa sổ mới sử dụng thuộc tính?",
    options: {
      A: "target=”_blank”",
      B: "target=”_parent”",
      C: "target=”_top”",
      D: "target=”_self”"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào định dạng bo góc một đối tượng với màu nền chỉ định?",
    options: {
      A: "border-radian",
      B: "border -rounded",
      C: "border-conner",
      D: "border-radius"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Cellspacing là khoảng cách?",
    options: {
      A: "Từ biên đến nội dung ô",
      B: "Nội dung với lề phải",
      C: "Giữa các ô",
      D: "Nội dung với lề trái"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Đâu là cú pháp tạo link đến Zalo với số điện thoại 0903762699 đúng?",
    options: {
      A: "`<a zalo=\"http://zalo.me/0903762699\">Zalo</a>`",
      B: "Tất cả đều đúng",
      C: "`<a href=\"http://zalo.me/0903762699\">Zalo</a>`",
      D: "`<a href=\"zalo.me/0903762699\">Zalo</a>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Cách chèn video v1.mp4 vào trang web đúng chuẩn `HTML5` là:",
    options: {
      A: "`<mp4 src=\"v1.mp4\"></mp4>`",
      B: "Cả a và b đúng",
      C: "`<video src=\"v1.mp4\"></video>`",
      D: "`<video controls><source src=\"v1.mp4\" type=\"video/mp4\"></video>`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Cú pháp CSS đúng là:",
    options: {
      A: "`body {color: red;}`",
      B: "`body {color: red;}`",
      C: "`Body {color=red}`",
      D: "`Body:color=red`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Phần tử nào là block mặc định?",
    options: {
      A: "h1",
      B: "Tất cả đúng",
      C: "div",
      D: "p"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Đoạn mã `<pre> 1    -    10 </pre>` xuất ra trình duyệt là gì?",
    options: {
      A: "1 10",
      B: "1-10",
      C: "1-10",
      D: "1        -        10"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để thêm vào form một đối tượng có thể lưu giữ giá trị và gửi lên server nhưng người dùng không thể thấy được, ta sử dụng ?",
    options: {
      A: "`<input type=\"hidden\" />`",
      B: "`<hidden type=”text”>`",
      C: "`<input type=\"text\" hidden=\"yes\" />`",
      D: "`<input type=\"text\" visible=\"no\" />`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Ô nhập liệu nào sau đây có chiều rộng là 100px ?",
    options: {
      A: "Tất cả đều đúng",
      B: "Tất cả đều sai",
      C: "`<input type=\"text\" width=\"100px\" />`",
      D: "`<input type=\"text\" style=\"width:100px\" />`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để định nghĩa CSS nội bộ (internal CSS), dùng thẻ:",
    options: {
      A: "`<css>`",
      B: "`<internal>`",
      C: "`<style>`",
      D: "`<link>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Từ HTML là từ viết tắt của từ nào?",
    options: {
      A: "Hyper Text Markup Language",
      B: "Tất cả đều sai",
      C: "Hyperlinks and Text Markup Language",
      D: "Home Tool Markup Language"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để liên kết file CSS ngoài vào HTML:",
    options: {
      A: "`<script href=\"style.css\">`",
      B: "`<style>my.css</style>`",
      C: "`<style src=\"my.css\">`",
      D: "`<link rel=\"stylesheet\" href=\"style.css\">`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đâu là tag tạo ra liên kết (links) trong web?",
    options: {
      A: "`<a>http://www.w3.com</a>`",
      B: "`<a namel=\"http://www.w3.com\">Click</a>`",
      C: "`<a url=\"http://www.w3.com\">Click</a>`",
      D: "`<a href=\"http://www.w3.com\">Click</a>`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong CSS, thuộc tính nào dùng để định dạng màu chữ?",
    options: {
      A: "text-color",
      B: "font color",
      C: "color",
      D: "Font-color"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào định dạng liên kết không có gạch chân?",
    options: {
      A: "`text-decoration : underline`",
      B: "`text-underline : none`",
      C: "`text-align : none`",
      D: "`text-decoration : none`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính nào của CSS không cho hình nền lập lại ?",
    options: {
      A: "background-norepeat",
      B: "bgimage-repeat",
      C: "`background-repeat: no-repeat`",
      D: "image-repeat"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để bỏ biểu tượng đánh dấu các phần tử trong một danh sách không thứ tự (<ul>) dùng thuộc tính CSS nào?",
    options: {
      A: "`style-image: none;`",
      B: "`list-symbol: none;`",
      C: "`list-style-type: none;`",
      D: "`list-type: none;`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Chọn khai báo quan hệ Child selector giữa div và p ?",
    options: {
      A: "div + p",
      B: "div * p",
      C: "div ~ p",
      D: "`div > p`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đoạn mã `This is a <br />sentence` xuất ra trình duyệt là gì?",
    options: {
      A: "This is a sentence",
      B: "`This is a <br />sentence`",
      C: "This is a **sentence**",
      D: "This is a   sentence"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Tag nào dùng để tạo tiêu đề kích lớn nhất?",
    options: {
      A: "`<h1>`",
      B: "`<h6>`",
      C: "`<heading>`",
      D: "`<header>`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Nếu viết padding: 20px 50px 10px 30px thì padding-left là bao nhiêu?",
    options: {
      A: "20px",
      B: "30px",
      C: "10px",
      D: "50px"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Sử dung emmet trong vscode tao ra mã html sau:\n\n`<form action=\"\" name=\"f1\">`\n\n`< input type=\"text\" name=\"input1\"> < input type=\"text\" name=\"input2\">`\n\n`</form>`",
    options: {
      A: "`form['name=f1'][action='']>input['type-text']['name'='input$']*2`",
      B: "`form[name=f1][action='']>input[type=text][name='input$']*2`",
      C: "`form[name=f1][action='']>input.type=text&name=input$*2`",
      D: "`form.name=f1[action='']> input[type=text][name='input$']*2`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Đoạn mã `ab<c>d</c>` xuất ra trên trình duyệt là gì?",
    options: {
      A: "abcd",
      B: "Lỗi",
      C: "`ab<c>d</c>`",
      D: "abd"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đoạn mã nào sau đây canh đều 2 bên?",
    options: {
      A: "`<p style=\"align:justify\">…</p>`",
      B: "Tất cả đều đúng",
      C: "`<p align=\"justify\">…</p>`",
      D: "`<p><justify>…</justify></p>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để nối (trộn) các ô theo chiều ngang dùng thuộc tính?",
    options: {
      A: "rowpan",
      B: "rowspan",
      C: "colpan",
      D: "colspan"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để nối (trộn) các ô theo chiều dọc dùng thuộc tính?",
    options: {
      A: "rowspan",
      B: "rowpan",
      C: "colpan",
      D: "colspan"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Cách viết CSS sau thuộc loại nào?\n\n`<style type=“text/css”>`\n\n`p {color: red; align: center }`\n\n`</style>`",
    options: {
      A: "External CSS",
      B: "Cả 3 đều sai",
      C: "In line CSS",
      D: "Internal CSS"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đâu là mã màu green (xanh lá)?",
    options: {
      A: "#00ff00",
      B: "#ffffff",
      C: "#0000ff",
      D: "#ff0000"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Đoạn mã `X<sup>2</sup>` xuất ra trình duyệt là gì?",
    options: {
      A: "X2",
      B: "`X<sup>2</sup>`",
      C: "X2",
      D: "X2"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Văn bản nào có màu đỏ:\n\n`<style>`\n\n`span, div.c2{color:red;}`\n\n`</style>`\n\n`<div class=\"c1\">Text1</div>`\n\n`<p>Text2</p><span>Text3</span>`",
    options: {
      A: "Text3",
      B: "Tất cả đều đúng",
      C: "Text1",
      D: "Text2"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Định dạng font chữ là Times New Roman bằng CSS thì lựa chọn nào sau đây đúng nhất ?",
    options: {
      A: "font-family: \"Times New Roman\"",
      B: "`font-family: Times New Roman`",
      C: "font-face: \"Times New Roman\"",
      D: "`font-face: Times New Roman`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính nào để làm mờ đối tượng ?",
    options: {
      A: "transparent",
      B: "Tất cả đều sai",
      C: "opacity",
      D: "blur"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Đâu là tag để xuống dòng trong web?",
    options: {
      A: "`<break>`",
      B: "Tất cả đều sai",
      C: "`<lb>`",
      D: "`<br>`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Tag nào tạo ra 1 drop-down list?",
    options: {
      A: "`<input type=\"dropdown\">`",
      B: "`<input type=\"list\">`",
      C: "`<select>`",
      D: "`<list>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Đoạn văn bản nào sẽ có màu red:\n\n`<style> li:nth-child(2n+1){color:red;} </style>`\n\n`<ul>`\n\n`<li>Text1</li>`\n\n`<li>Text2</li>`\n\n`<li>Text3</li>`\n\n`<li>Text4</li>`\n\n`</ul>`",
    options: {
      A: "text1, text3",
      B: "text1, text2, text3, text4",
      C: "text1, text2",
      D: "text2, text4"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Trong CSS, để canh vị trí hình nền nằm giữa, ta sử dụng thuộc tính nào?",
    options: {
      A: "background-attachment",
      B: "background-position",
      C: "background-align",
      D: "background-center"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để hiển thị 2 khoảng trắng giữa text1 và text2 trên trình duyệt, cách nào đúng?",
    options: {
      A: "Cả a và b đúng",
      B: "Cả a và b sai",
      C: "text1 text2 (2 khoảng trắng)",
      D: "text1  text2"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong <table> sử dụng thẻ <th> nội dung sẽ tự động?",
    options: {
      A: "Canh giữa ô",
      B: "Tất cả đều sai",
      C: "Canh đều 2 bên",
      D: "Canh phải"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để chèn hình `1.jpg` nằm trong thư mục cha, cú pháp đúng là:",
    options: {
      A: "`<img src=\"../../1.jpg\">`",
      B: "`<img src=\"../1.jpg\">`",
      C: "`<img src=\"/1.jpg\">`",
      D: "`<img src=\"1.jpg\">`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Trong textfield <input type=”text” /> thuộc tính nào giới hạn số ký tự nhập vào?",
    options: {
      A: "width",
      B: "value",
      C: "size",
      D: "maxlenght"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Chọn thứ tự định dạng liên kết đúng ?",
    options: {
      A: "`link > visited > hover > active`",
      B: "Tất cả đều sai",
      C: "`link > hover > visited > active`",
      D: "`link > acitve > visisted > hover`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào định dạng đường biên (border) table nét đơn?",
    options: {
      A: "`border-line : collapse`",
      B: "`border-collapse : collapse`",
      C: "`border-collapse : separate`",
      D: "`border-collapse :  1px`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để chuyển văn bản thành chữ in hoa, dùng thuộc tính:",
    options: {
      A: "text-transform",
      B: "uppercase",
      C: "letter-spacing",
      D: "word-spacing"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Cellpadding là khoảng cách?",
    options: {
      A: "Từ biên đến nội dung ô",
      B: "Nội dung với lề phải",
      C: "Giữa các ô",
      D: "Nội dung với lề trái"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào xác định ảnh nền đứng yên hay di chuyển khi scroll?",
    options: {
      A: "background-image",
      B: "background-repeat",
      C: "background-attachment",
      D: "background-position"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thêm gì vào <input type=”text” /> để có được gợi ý “Nhập số” như sau:",
    options: {
      A: "hint=\"Nhập số\"",
      B: "placeholder=\"Nhập số\"",
      C: "value=\"Nhập số\"",
      D: "comment=\"Nhập số\""
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Đâu là tag tạo ra chữ in nghiêng?",
    options: {
      A: "`<i>`",
      B: "`Cả <em> và <i>`",
      C: "`<em>`",
      D: "`<italics>`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Phần tử nào là inline mặc định?",
    options: {
      A: "span",
      B: "h1",
      C: "div",
      D: "p"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Định nghĩa CSS sau có ý nghĩa gì?\n\n`input:focus { background-color: red; }`",
    options: {
      A: "Các thẻ input có class là focus sẽ có nền màu đỏ",
      B: "Các thẻ input khi được chọn (focus) sẽ có nền màu đỏ",
      C: "Các thẻ input có id là focus sẽ có nền màu đỏ",
      D: "Các thẻ input khi mất focus sẽ có nền màu đỏ"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Chọn thứ tự định dạng các góc?",
    options: {
      A: "top-right, bottom-right, bottom-left, top-left",
      B: "top-left, top-right, bottom-left, bottom-right",
      C: "top-left, bottom-right, top-right, bottom-left",
      D: "top-left, top-right, bottom-right, bottom-left"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Tag nào dùng để tạo tiêu đề kích nhỏ nhất?",
    options: {
      A: "`<h1>`",
      B: "`<h6>`",
      C: "`<heading>`",
      D: "`<header>`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính nào dùng để tạo gợi ý nhập liệu cho 1 text field.",
    options: {
      A: "`recommend`",
      B: "`hint`",
      C: "`placeholder`",
      D: "`hint=\"Nhập số\"`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thẻ nào sau đây dùng để tạo một liên kết trong trang1.html đến vị trí pos1 trong trang2.html biết 2 trang lưu trong cùng 1 thư mục?",
    options: {
      A: "`<a href=\"pos1&trang2.html\"></a>`",
      B: "`<a href=\"trang2.html&pos1\"></a>`",
      C: "`<a href=\"trang2.html#pos1\"></a>`",
      D: "`<a href=\"trang2.html@pos1\"></a>`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Khi sử dụng thuộc tính display: flex, thì thuộc tính nào đi kèm xác định chiều của các item con trực tiếp",
    options: {
      A: "`flex-t`",
      B: "`flex-grow`",
      C: "`flex-direction`",
      D: "`auto`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để định dạng màu nền cho các ô thuộc dòng đầu tiên của table có id là tbl1, mã css nào đúng?",
    options: {
      A: "`table tr {background-color:#F00;}`",
      B: "`#tbl1 tr:1 {background-color:#F00;}`",
      C: "`#tbl1 tr:first {background-color:#F00;}`",
      D: "`#tbl1 tr:first-child {background-color:#F00;}`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Chọn khai báo quan hệ Descendant Selector giữa div và p ?",
    options: {
      A: "`div ~ p`",
      B: "`div p`",
      C: "`div + p`",
      D: "`div * p`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Chọn khai báo quan hệ Adjacent Sibling Selector giữa div và p ?",
    options: {
      A: "`div ~ p`",
      B: "`div > p`",
      C: "`div + p`",
      D: "`div * p`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thẻ HTML nào được sử dụng để trỏ tới external style sheet?",
    options: {
      A: "`<link rel= “stylesheet” type= “text/css” href=”style.css”>`",
      B: "`<stylesheet>style.css</stylesheet>`",
      C: "`<link url= “stylesheet” type= “text/css” href=”style.css”>`",
      D: "`<style src=”style.css”>`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính z-index dùng để?",
    options: {
      A: "Tạo hiệu ứng màu sắc cho liên kết",
      B: "Đặt các thành phần web ở các lớp khác nhau",
      C: "Định vị tương đối cho một thành phần",
      D: "Quy định kiểu viền của một đối tượng web"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Lựa chọn thiết lập ảnh nền cố định?",
    options: {
      A: "`background-attachment: scroll`",
      B: "Tất cả đều sai",
      C: "`background-attachment: fix`",
      D: "`background-attachment: fixed`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính và giá trị CSS nào dùng để chuyển tất cả các ký tự đầu thành chứ viết hoa?",
    options: {
      A: "`text-transform:proper`",
      B: "Không thể làm được với CSS",
      C: "`text-transform:uppercase`",
      D: "`text-transform:capitaliza`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đặt dòng liên kết với file CSS ở vùng nào trong trang HTML?",
    options: {
      A: "Ở cuối trang HTML",
      B: "Ở đầu trang HTML",
      C: "`Trong thẻ <head>`",
      D: "`Trong thẻ <body>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để thay đổi màu chữ trong thẻ div có id=id1, câu lệnh javascript nào đúng?",
    options: {
      A: "document.getElementById('id1').color='red';",
      B: "document.getElementById('id1').color('red');",
      C: "document.getElementById('id1').style.color='red';",
      D: "document.getElementById('id1').style.color('red');"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để xóa nội dung của thẻ div có id=id1, đoạn lệnh nào sau đúng?",
    options: {
      A: "document.getElementById('id1').value='';",
      B: "document.getElementById('id1').delete()';",
      C: "document.getElementById('id1').innerHTML='';",
      D: "document.getElementById('id1').HTML='';"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Nhóm các đối tượng có cùng thuộc tính và có thể được sử dụng nhiều lần là?",
    options: {
      A: "Cả class và id đều đúng",
      B: "Cả class và id đều sai",
      C: "class",
      D: "id"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id*=’abc’]",
    options: {
      A: "Những thẻ input mà thuộc tính id có giá trị chứa abc",
      B: "Tất cả đều sai",
      C: "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc",
      D: "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Cú pháp CSS nào được sử dụng để chuyển tất cả các thẻ <p> thành bold?",
    options: {
      A: "`p {font-weight:bold}`",
      B: "`p {font:bold}`",
      C: "`p {text-size:bold}`",
      D: "`style:bold`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n<div>\n<a href=\"#\">A</a>\n<b><a href=\"#\">B</a></b>\n<a href=\"#\">C</a>\n</div>\n\ndiv > a{color:green}\n\nHỏi nội dung nào có màu xanh ?",
    options: {
      A: "A và C",
      B: "Tất cả đều đúng",
      C: "A",
      D: "B"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính nào của thẻ <input type=”text” > để giới hạn số ký tự nhập vào?",
    options: {
      A: "maxchar",
      B: "maxlenght",
      C: "limit",
      D: "chars"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để truy xuất lấy giá trị phần tử textbox có name=n ra biến x, mã javascript là ?",
    options: {
      A: "x = document.getElementByName('n');",
      B: "x = document.getElementsByName('n').value;",
      C: "x = docuemnt.frm.n.value;",
      D: "x = docuemnt.frm.n.value();"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Phương thức nào của jQuery tương đương câu lệnh javascript: `document.getElementById(\"ID\").`",
    options: {
      A: "$(\"id=ID\");",
      B: "$(\".ID\");",
      C: "$(\"#ID\");",
      D: "$(\"ID\") ;"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để bỏ biểu tượng đánh dấu các phần tử trong một danh sách không thứ tự (<ul>) dùng thuộc tính CSS nào sau đây?",
    options: {
      A: "style-image",
      B: "list-symbol",
      C: "list-style-type",
      D: "list-style"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính gì của thẻ option để xác định phần tử đó được chọn?",
    options: {
      A: "Tất cả đều đúng",
      B: "Tất cả đều sai",
      C: "checked",
      D: "default"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Nếu viết padding: 20px 50px thì padding-right là bao nhiêu?",
    options: {
      A: "20px",
      B: "50px - 50px",
      C: "10px",
      D: "50px"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Nếu viết padding: 20px 40px 30px thì padding-top và padding-bottom là bao nhiêu?",
    options: {
      A: "20px – 40px",
      B: "30px – 40px",
      C: "40px – 30px",
      D: "20px – 30px"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để chèn 1 file CSS vào trang HTML thì cú pháp nào đúng?",
    options: {
      A: "`<div style=\"width:100px\"></div>`",
      B: "Chả cái nào đúng hết đâu!",
      C: "`<file rel=\"stylesheet\"  href=\"...\"></file>`",
      D: "`<style rel=\"stylesheet\" src=\"...\"></style>`",
      E: "`<a rel=\"stylesheet\" href=\"...\"></a>`"
    },
    answer: "E",
    explanation: ""
  },
  {
    q: "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id^=’abc’]",
    options: {
      A: "Những thẻ input mà thuộc tính id có giá trị chứa abc",
      B: "Tất cả đều sai",
      C: "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc",
      D: "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Phương thức nào của jQuery tương đương với thuộc tính innerHTML của javascript?",
    options: {
      A: "html();",
      B: "innerHTML();",
      C: "val();",
      D: "content();"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Chọn thứ tự định dạng liên kết trong CSS?",
    options: {
      A: "`a:link > a :hover >  a:visited > a:active`",
      B: "`a:active > a:link > a:visited > a :hover`",
      C: "`a:link > a:visited > a :hover > a:active`",
      D: "`a:visited > a:link > a :hover > a:active`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào định dạng đối tượng ẩn nhưng vẫn chiếm vùng không gian?",
    options: {
      A: "`display: inline`",
      B: "`visibility: hidden`",
      C: "`display: none`",
      D: "`display: block`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Thẻ HTML nào được sử dụng để khởi tạo internal style sheet?",
    options: {
      A: "`<script>`",
      B: "`<stylesheet>`",
      C: "`<style>`",
      D: "`<css>`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính nào của thẻ input dùng để xác định giá trị khởi tạo cho textfield?",
    options: {
      A: "value",
      B: "default",
      C: "init",
      D: "initvalue"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính nào để tạo danh sách hiển thị tất cả các thành phần trong ô vuông?",
    options: {
      A: "`list-type: square`",
      B: "`style-type: square`",
      C: "`type:square`",
      D: "`list-style-type: square`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id$=’abc’]",
    options: {
      A: "Những thẻ input mà thuộc tính id có giá trị chứa abc",
      B: "Tất cả đều sai",
      C: "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc",
      D: "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Cách ẩn phần tử được chọn trong jQuery, sử dụng phương thức nào?",
    options: {
      A: "hidden();",
      B: "display(none);",
      C: "hide();",
      D: "visible(false);"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính nào trong CSS để làm mờ đối tượng",
    options: {
      A: "opacity",
      B: "Tất cả đều sai",
      C: "transparent",
      D: "blur"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Trong CSS, thuộc tính nào để hiển thị nội dung text dưới dạng bold?",
    options: {
      A: "`style:bold`",
      B: "`font-weight:bold`",
      C: "`font:b`",
      D: "`font:bold`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n<div>\n<a href=\"#\">A</a>\n<b><a href=\"#\">B</a></b>\n</div>\n<a href=\"#\">C</a>\n\ndiv > a{color:red}\n\nHỏi nội dung nào có màu đỏ ?",
    options: {
      A: "C",
      B: "Tất cả đều đúng",
      C: "A",
      D: "B"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n<div>\n<a href=\"#\">A</a>\n<a href=\"#\"><b>B</b></a>\n<b><a href=\"#\">C</a></b>\n</div>\n\ndiv, a{color:yellow}\n\nHỏi nội dung nào có màu vàng ?",
    options: {
      A: "C",
      B: "Tất cả đều đúng",
      C: "A",
      D: "B"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào định dạng đối tượng nằm một hàng riêng biệt?",
    options: {
      A: "`display: inline`",
      B: "`display: inline-block`",
      C: "`display: none`",
      D: "`display: block`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào dùng để ngăn không cho 1 đối tượng bị ảnh hưởng bởi các đối tượng được float trước đó?",
    options: {
      A: "fixed",
      B: "static",
      C: "clear",
      D: "anchor"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thẻ div nào sau đây có chiều rộng là 100px?",
    options: {
      A: "`<div width=\"100px\"></div>`",
      B: "`<div style=\"width:100px\"></div>`",
      C: "`<div style=\"width=100px\"></div>`",
      D: "`<div width:\"100px\"></div>`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Phương thức nào của jQuery ngăn ngừa code chạy trước khi trang web load xong?",
    options: {
      A: "$(body).onload();",
      B: "$(body).load();",
      C: "$(document).ready();",
      D: "$(document).load();"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Chọn thứ tự giá trị thuộc tính đúng mã CSS sau?",
    options: {
      A: "`border: solid  1px  #333;`",
      B: "`border: 1px  #333  solid;`",
      C: "`border: #333  1px  solid ;`",
      D: "`border: 1px  solid  #333;`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n`<div>\n\n<a href=\"#\">A</a>\n\n<a href=\"#\"><b>B</b></a>\n\n<b><a href=\"#\">C</a></b>\n\n</div>`\nMã HTML\n\n`div  b  a{color:blue}`\nMã CSS\n\nHỏi nội dung nào có màu xanh ?",
    options: {
      A: "C",
      B: "Tất cả đều đúng",
      C: "A",
      D: "B"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Thuộc tính nào trong CSS định dạng kiểu border phía top của element",
    options: {
      A: "`border-style`",
      B: "`border-top-type`",
      C: "`border-top-family`",
      D: "`border-top-style`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Nếu viết padding: 20px 50px 10px 30px thì padding-bottom là bao nhiêu?",
    options: {
      A: "`10px`",
      B: "`50px`",
      C: "`20px`",
      D: "`30px`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "JavaScript là ngôn ngữ dịch mã nguồn theo kiểu nào?",
    options: {
      A: "`Biên dịch`",
      B: "`Thông dịch`",
      C: "`Cả biên dịch và thông dịch`",
      D: "`Không có dạng nào`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Hàm alert(...) trong JavaScript dùng để làm gì?",
    options: {
      A: "`Hiển thị một thông báo Yes, No`",
      B: "`Hiển thị thông báo yêu cầu nhập thông tin`",
      C: "`Hiển thị một thông báo`",
      D: "`Không phương án nào đúng`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Hàm prompt(...) trong JavaScript dùng để làm gì?",
    options: {
      A: "`Hiển thị một thông báo`",
      B: "`Hiển thị một thông báo Yes, No`",
      C: "`Hiển thị thông báo yêu cầu nhập thông tin`",
      D: "`Không phương án nào đúng`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Đâu là kết quả của phép tính sau 2+6+'3'",
    options: {
      A: "`83`",
      B: "`'83'`",
      C: "`11`",
      D: "`'11'`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong javascript biểu thức x===y có nghĩa là:",
    options: {
      A: "`Cả x và y đều bằng nhau về giá trị, kiểu và địa chỉ tham chiếu.`",
      B: "`Cả hai đều là x và y chỉ bằng nhau về giá trị.`",
      C: "`Cả hai đều bằng nhau về giá trị và kiểu dữ liệu.`",
      D: "`Cả hai đều không giống nhau chút nào.`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Trong JavaScript sự kiện Onblur thực hiện khi nào?",
    options: {
      A: "`Khi di chuyển con chuột qua form`",
      B: "`Khi một đối tượng trong form mất focus`",
      C: "`Khi một đối tượng trong form nhận focus`",
      D: "`Khi di chuyển chuột vào nút lệnh`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Hàm nào trong JavaScript được sử dụng để chọn tất cả các đối tượng có class=\"selector\"?",
    options: {
      A: "`querySelectorAll()`",
      B: "`querySelector()`",
      C: "`getElementByClass()`",
      D: "`Cả a,b,c đều sai`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Cách khai báo mảng nào trong javascript là đúng ?",
    options: {
      A: "`var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")`",
      B: "`var colors = (1:\"red\", 2:\"green\", 3:\"blue\")`",
      C: "`var colors = [\"red\", \"green\", \"blue\"]`",
      D: "`var colors = \"red\", \"green\", \"blue\"`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Form có id=frm, để lấy giá trị phần tử trong form có id=n ra biến x, mã javascript là",
    options: {
      A: "`x = document.getElementById('n');`",
      B: "`x = document.getElementById('n').value;`",
      C: "`x = document.frm.n.value;`",
      D: "`x = document.frm.n.value();`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Cho mảng arr = ['aa','bb','cc','dd']; để xóa 'bb' và 'cc' mã javascript là",
    options: {
      A: "`arr.splice(1,1);`",
      B: "`arr.splice(1,3);`",
      C: "`arr.splice(2,3);`",
      D: "`arr.splice(1,2);`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để ẩn phần tử có id=txt, mã javascript là",
    options: {
      A: "`document.getElementById('txt').display= 'none';`",
      B: "`document.getElementById('txt').style.display= 'none';`",
      C: "`document.getElementById('txt').css.display= 'none';`",
      D: "`document.getElementById('txt').style.display= 'hide';`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để đổi kích thước chữ của phần tử có id=txt thành 60px, mã javascript là",
    options: {
      A: "`document.getElementById('txt').style.fontSize= '60px';`",
      B: "`document.getElementById('txt').css.fontSize= '60px';`",
      C: "`document.getElementById('txt').style.Size= '60px';`",
      D: "`document.getElementById('txt').fontSize= '60px';`"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để xóa phần tử thứ 1 có class là class1 bằng jQuery là:",
    options: {
      A: "`$('#class1')[0].remove();`",
      B: "`$('.class1')[0].remove();`",
      C: "`$('#class1')[1].remove();`",
      D: "`$('.class1')[1].remove();`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để xóa phần tử thứ 2 có class là class1 bằng jQuery là:",
    options: {
      A: "`$('.class1')[0].remove();`",
      B: "`$('#class1')[0].remove();`",
      C: "`$('.class1')[1].remove();`",
      D: "`$('#class1')[1].remove();`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Tìm phần tử đầu tiên `<p>` và thay đổi giá trị của phần tử đó thành \"Hello\", mã javascript là",
    options: {
      A: "`document.getElementsByName('p')[0].innerHTML = 'Hello';`",
      B: "`document.getElementsByTagName('p')[0].innerHTML = 'Hello';`",
      C: "`document.getElementsByName('p')[1].innerHTML = 'Hello';`",
      D: "`document.getElementsByTagName('p')[0].innerText = 'Hello';`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Tìm phần tử thứ 2 `<p>` và thay đổi giá trị của phần tử đó thành \"Hello\", mã javascript là",
    options: {
      A: "`document.getElementsByName('p')[0].innerHTML = 'Hello';`",
      B: "`document.getElementsByName('p')[1].innerHTML = 'Hello';`",
      C: "`document.getElementsByTagName('p')[0].innerText = 'Hello';`",
      D: "`document.getElementsByTagName('p')[1].innerHTML = 'Hello';`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để đổi màu chữ của phần tử có name=n thành 'red', mã javascript là",
    options: {
      A: "`document.getElementsByName('n').color='red';`",
      B: "`document.getElementsByName('n').add.color='red';`",
      C: "`document.getElementsByName('n')[0].css.color='red';`",
      D: "`document.getElementsByName('n')[0].style.color='red';`"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để lấy giá trị tên thuộc tính đầu tiên của phần tử (nút) Button thứ 1 ra biến a, mã javascript là",
    options: {
      A: "`a = document.getElementsByName(\"BUTTON\")[0].attributes[0].name;`",
      B: "`a = document.getElementsByName(\"BUTTON\")[0].attributes[1].name;`",
      C: "`a = document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name;`",
      D: "`a = document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name;`"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để lấy giá trị tên thuộc tính đầu tiên của phần tử (nút) Button thứ 2 ra biến a, mã javascript là",
    options: {
      A: "`a = document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name;`",
      B: "`a = document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name;`",
      C: "`a = document.getElementsByName(\"BUTTON\")[0].attributes[0].name;`",
      D: "`a = document.getElementsByName(\"BUTTON\")[1].attributes[0].name;`"
    },
    answer: "B",
    explanation: ""
  }
];

