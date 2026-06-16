const quizData = [
  {
    q: "Từ HTML là từ viết tắt của từ nào?",
    options: {
      A: "Hyperlinks and Text Markup Language",
      B: "Home Tool Markup Language",
      C: "Hyper Text Markup Language",
      D: "Tất cả đều sai"
    },
    answer: "C",
    explanation: "HTML viết tắt của Hyper Text Markup Language (Ngôn ngữ đánh dấu siêu văn bản), được dùng để cấu trúc trang web."
  },
  {
    q: "Đâu là tag tạo ra chữ in nghiêng?",
    options: {
      A: "`<em>`",
      B: "`<italics>`",
      C: "`<i>`",
      D: "`Cả <em> và <i>`"
    },
    answer: "D",
    explanation: "Trong HTML, cả thẻ `<em>` (emphasized) và `<i>` (italic) đều định dạng chữ in nghiêng."
  },
  {
    q: "Đâu là tag để xuống dòng trong web?",
    options: {
      A: "`<lb>`",
      B: "`<br>`",
      C: "`<break>`",
      D: "Tất cả đều sai"
    },
    answer: "B",
    explanation: "Thẻ `<br>` (line break) được sử dụng để ngắt dòng trực tiếp trong văn bản HTML."
  },
  {
    q: "Đâu là tag tạo ra liên kết (links) trong web?",
    options: {
      A: "`<a url=\"http://www.w3.com\">Click</a>`",
      B: "`<a href=\"http://www.w3.com\">Click</a>`",
      C: "`<a>http://www.w3.com</a>`",
      D: "`<a namel=\"http://www.w3.com\">Click</a>`"
    },
    answer: "B",
    explanation: "Thẻ `<a>` (anchor) với thuộc tính `href` dùng để tạo liên kết đến các trang web hoặc tài nguyên khác."
  },
  {
    q: "Tag nào dùng để tạo tiêu đề kích lớn nhất?",
    options: {
      A: "`<heading>`",
      B: "`<header>`",
      C: "`<h1>`",
      D: "`<h6>`"
    },
    answer: "C",
    explanation: "Trong HTML có các cấp tiêu đề từ `<h1>` đến `<h6>`, trong đó `<h1>` là tiêu đề lớn nhất."
  },
  {
    q: "Đoạn mã `X<sub><u>2</u></sub>` xuất ra trình duyệt là gì?",
    options: {
      A: "X<sub><u>2</u></sub>",
      B: "X<sup><u>2</u></sup>",
      C: "X<sub>2</sub>",
      D: "X2"
    },
    answer: "A",
    explanation: "Thẻ `<sub>` (subscript) định nghĩa chỉ số dưới, kết hợp thẻ `<u>` (underline) để gạch chân chữ số 2, tạo ra chữ X₂ gạch chân."
  },
  {
    q: "Đoạn mã `X<sup>2</sup>` xuất ra trình duyệt là gì?",
    options: {
      A: "X₂",
      B: "X2",
      C: "X²",
      D: "`X<sup>2</sup>`"
    },
    answer: "C",
    explanation: "Thẻ `<sup>` (superscript) định nghĩa chỉ số trên, dùng để viết số mũ hoặc lũy thừa (như X²)."
  },
  {
    q: "Để đánh dấu bookmark (liên kết trong) ta sử dụng cách nào sau đây?`(chọn 2 đáp án)`",
    options: {
      A: "`<a name=”tên_bookmark”>…</a>`",
      B: "`<p id=” # tên_bookmark”>…</p>`",
      C: "`<a name=” # tên_bookmark”>…</a>`",
      D: "`<p id=”tên_bookmark”>…</p>`"
    },
    answer: ["A", "D"],
    explanation: "Có hai cách tạo liên kết trong trang (bookmark): dùng thẻ `<a>` có thuộc tính `name` hoặc gán thuộc tính `id` cho bất kỳ thẻ nào."
  },
  {
    q: "Để mở liên kết trong một cửa sổ mới sử dụng thuộc tính?",
    options: {
      A: "target=”_top”",
      B: "target=”_self”",
      C: "target=”_blank”",
      D: "target=”_parent”"
    },
    answer: "C",
    explanation: "Sử dụng thuộc tính `target=\"_blank\"` để yêu cầu trình duyệt mở liên kết trong một thẻ mới hoặc cửa sổ mới."
  },
  {
    q: "Cách viết CSS sau thuộc loại nào?\n\n`<style type=“text/css”>`\n\n`p {color: red; align: center }`\n\n`</style>`",
    options: {
      A: "In line CSS",
      B: "Internal CSS",
      C: "External CSS",
      D: "Cả 3 đều sai"
    },
    answer: "B",
    explanation: "Định nghĩa CSS viết trong thẻ `<style>` đặt ở phần đầu trang HTML được gọi là CSS nội bộ (Internal CSS)."
  },
  {
    q: "Đoạn mã `This is a <span>sentence</span>` xuất ra trình duyệt là gì?",
    options: {
      A: "This is a **sentence**",
      B: "This is a <br>sentence",
      C: "`This is a <span>sentence</span>`",
      D: "This is a sentence"
    },
    answer: "D",
    explanation: "Thẻ `<span>` là phần tử nội dòng (inline) mặc định, không tự tạo dòng mới hay làm thay đổi hiển thị chữ, nên chữ xuất ra bình thường."
  },
  {
    q: "Đoạn mã `This is a <br />sentence` xuất ra trình duyệt là gì?",
    options: {
      A: "This is a **sentence**",
      B: "This is a   sentence",
      C: "This is a sentence",
      D: "`This is a <br />sentence`"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đoạn mã nào sau đây canh đều 2 bên?",
    options: {
      A: "`<p align=\"justify\">…</p>`",
      B: "`<p><justify>…</justify></p>`",
      C: "`<p style=\"align:justify\">…</p>`",
      D: "Tất cả đều đúng"
    },
    answer: "A",
    explanation: "Thuộc tính `align=\"justify\"` của thẻ `<p>` dùng để căn đều văn bản ở cả hai biên trái và phải."
  },
  {
    q: "Đoạn mã `<pre> 1    -    10 </pre>` xuất ra trình duyệt là gì?",
    options: {
      A: "1-10",
      B: "1        -        10",
      C: "1 10",
      D: "1-10"
    },
    answer: "B",
    explanation: "Thẻ `<pre>` (preformatted text) giữ nguyên mọi khoảng trắng, tab và dấu ngắt dòng đúng như khi viết trong mã nguồn."
  },
  {
    q: "Đoạn mã `ab<c>d</c>` xuất ra trên trình duyệt là gì?",
    options: {
      A: "`ab<c>d</c>`",
      B: "abd",
      C: "abcd",
      D: "Lỗi"
    },
    answer: "B",
    explanation: "Trình duyệt không nhận biết thẻ `<c>` nhưng vẫn bỏ qua nó và hiển thị nội dung văn bản bên trong là 'abd'."
  },
  {
    q: "Tag nào tạo ra 1 drop-down list?",
    options: {
      A: "`<select>`",
      B: "`<list>`",
      C: "`<input type=\"dropdown\">`",
      D: "`<input type=\"list\">`"
    },
    answer: "A",
    explanation: "Thẻ `<select>` kết hợp với các thẻ `<option>` bên trong tạo ra danh sách lựa chọn dạng thả (drop-down list)."
  },
  {
    q: "Đâu là tag tạo ra 1 danh sách đứng đầu bằng số?",
    options: {
      A: "`<ul>`",
      B: "`<list>`",
      C: "`<ol>`",
      D: "`<dl>`"
    },
    answer: "C",
    explanation: "Thẻ `<ol>` (Ordered List) tạo ra danh sách có thứ tự (đầu dòng được đánh số hoặc chữ cái tự động)."
  },
  {
    q: "Đâu là tag tạo ra 1 danh sách đứng đầu bởi dấu chấm • ?",
    options: {
      A: "`<ul>`",
      B: "`<list>`",
      C: "`<ol>`",
      D: "`<dl>`"
    },
    answer: "A",
    explanation: "Thẻ `<ul>` (Unordered List) tạo ra danh sách không thứ tự (mặc định hiển thị dấu chấm tròn đen đầu dòng)."
  },
  {
    q: "Thẻ <dl>…</dl> là danh sách gì?",
    options: {
      A: "Không có thứ tự",
      B: "Mô tả/Định nghĩa",
      C: "Có thứ tự",
      D: "Tất cả đều sai"
    },
    answer: "B",
    explanation: "Thẻ `<dl>` (Description List) dùng để tạo danh sách mô tả định nghĩa các thuật ngữ."
  },
  {
    q: "Trong danh sách không thứ tự <ul> muốn sử dụng 1 hình ảnh khác làm biểu tượng thì phải làm sao?",
    options: {
      A: "Thay đổi thuộc tính type",
      B: "Thay đổi thuộc tính src",
      C: "Dùng thuộc tính list-style-image",
      D: "Không thay đổi được"
    },
    answer: "C",
    explanation: "Trong CSS, thuộc tính `list-style-image` được dùng để gán hình ảnh tùy chọn làm biểu tượng đầu dòng thay cho dấu chấm mặc định."
  },
  {
    q: "Để bỏ biểu tượng đánh dấu các phần tử trong một danh sách không thứ tự (<ul>) dùng thuộc tính CSS nào?",
    options: {
      A: "`list-style-type: none;`",
      B: "`list-type: none;`",
      C: "`style-image: none;`",
      D: "`list-symbol: none;`"
    },
    answer: "A",
    explanation: "Thiết lập thuộc tính `list-style-type: none` trong CSS để ẩn biểu tượng chấm tròn đầu dòng của danh sách `<ul>`."
  },
  {
    q: "Thuộc tính nào của CSS không cho hình nền lập lại ?",
    options: {
      A: "`background-repeat: no-repeat`",
      B: "image-repeat",
      C: "background-norepeat",
      D: "bgimage-repeat"
    },
    answer: "A",
    explanation: "Thuộc tính `background-repeat: no-repeat` ngăn không cho ảnh nền lặp lại (lát gạch) trên trang web."
  },
  {
    q: "Trong CSS, để canh vị trí hình nền nằm giữa, ta sử dụng thuộc tính nào?",
    options: {
      A: "background-align",
      B: "background-center",
      C: "background-attachment",
      D: "background-position"
    },
    answer: "D",
    explanation: "Thuộc tính `background-position: center` định vị ảnh nền nằm chính giữa phần tử chứa."
  },
  {
    q: "Trong <table> sử dụng thẻ <th> nội dung sẽ tự động?",
    options: {
      A: "Canh đều 2 bên",
      B: "Canh phải",
      C: "Canh giữa ô",
      D: "Tất cả đều sai"
    },
    answer: "C",
    explanation: "Thẻ `<th>` (table header) tự động in đậm chữ và căn giữa nội dung ô theo mặc định."
  },
  {
    q: "Cellspacing là khoảng cách?",
    options: {
      A: "Giữa các ô",
      B: "Nội dung với lề trái",
      C: "Từ biên đến nội dung ô",
      D: "Nội dung với lề phải"
    },
    answer: "A",
    explanation: "Thuộc tính `cellspacing` định nghĩa khoảng cách trống giữa các ô (giữa các viền ô) trong bảng."
  },
  {
    q: "Cellpadding là khoảng cách?",
    options: {
      A: "Giữa các ô",
      B: "Nội dung với lề trái",
      C: "Từ biên đến nội dung ô",
      D: "Nội dung với lề phải"
    },
    answer: "C",
    explanation: "Thuộc tính `cellpadding` định nghĩa khoảng cách từ đường viền ô đến nội dung bên trong ô đó."
  },
  {
    q: "Thuộc tính màu nền trong <table> là?",
    options: {
      A: "background",
      B: "bordercolor",
      C: "bgcolor",
      D: "background-image"
    },
    answer: "C",
    explanation: "Trong HTML truyền thống, thuộc tính `bgcolor` được sử dụng để thiết lập màu nền cho thẻ `<table>`."
  },
  {
    q: "Thuộc tính nào canh chỉnh nội dung các ô theo chiều dọc trong <table> ?",
    options: {
      A: "align",
      B: "valign",
      C: "halign",
      D: "text-align"
    },
    answer: "B",
    explanation: "Thuộc tính `valign` (vertical align) quy định căn chỉnh nội dung ô theo chiều dọc (top, middle, bottom)."
  },
  {
    q: "Để nối (trộn) các ô theo chiều ngang dùng thuộc tính?",
    options: {
      A: "colpan",
      B: "colspan",
      C: "rowpan",
      D: "rowspan"
    },
    answer: "B",
    explanation: "Thuộc tính `colspan` (column span) dùng để gộp các ô theo chiều ngang (cột) trong bảng."
  },
  {
    q: "Để nối (trộn) các ô theo chiều dọc dùng thuộc tính?",
    options: {
      A: "colpan",
      B: "colspan",
      C: "rowspan",
      D: "rowpan"
    },
    answer: "C",
    explanation: "Thuộc tính `rowspan` (row span) dùng để gộp các ô theo chiều dọc (dòng) trong bảng."
  },
  {
    q: "Thêm gì vào <input type=”text” /> để có được gợi ý “Nhập số” như sau:",
    options: {
      A: "value=\"Nhập số\"",
      B: "comment=\"Nhập số\"",
      C: "hint=\"Nhập số\"",
      D: "placeholder=\"Nhập số\""
    },
    answer: "D",
    explanation: "Thuộc tính `placeholder` tạo văn bản gợi ý mờ hiển thị trong ô nhập liệu khi ô đó chưa có nội dung."
  },
  {
    q: "Trong textfield <input type=”text” /> thuộc tính nào giới hạn số ký tự nhập vào?",
    options: {
      A: "size",
      B: "maxlenght",
      C: "width",
      D: "value"
    },
    answer: "B",
    explanation: "Thuộc tính `maxlength` (viết trong quiz là `maxlenght`) giới hạn số lượng ký tự tối đa người dùng có thể nhập vào textfield."
  },
  {
    q: "Thêm thuộc tính nào vào <input type=”text” …> để không cho người dùng thay đổi giá trị của nó nhưng vẫn gửi dữ liệu lên server.",
    options: {
      A: "enable=\"false\"",
      B: "locked",
      C: "readonly",
      D: "change-value=\"no\""
    },
    answer: "C",
    explanation: "Thuộc tính `readonly` ngăn thay đổi giá trị nhập nhưng vẫn gửi dữ liệu khi submit form (khác với `disabled` sẽ không gửi dữ liệu)."
  },
  {
    q: "Để thêm vào form một đối tượng có thể lưu giữ giá trị và gửi lên server nhưng người dùng không thể thấy được, ta sử dụng ?",
    options: {
      A: "`<input type=\"text\" hidden=\"yes\" />`",
      B: "`<input type=\"text\" visible=\"no\" />`",
      C: "`<input type=\"hidden\" />`",
      D: "`<hidden type=”text”>`"
    },
    answer: "C",
    explanation: "Thẻ `<input type=\"hidden\">` tạo ô nhập ẩn, lưu trữ thông tin nội bộ gửi lên server mà không hiển thị trên giao diện người dùng."
  },
  {
    q: "Định dạng font chữ là Times New Roman bằng CSS thì lựa chọn nào sau đây đúng nhất ?",
    options: {
      A: "font-face: \"Times New Roman\"",
      B: "`font-face: Times New Roman`",
      C: "font-family: \"Times New Roman\"",
      D: "`font-family: Times New Roman`"
    },
    answer: "C",
    explanation: "Sử dụng thuộc tính `font-family` để khai báo danh sách font chữ hiển thị cho phần tử."
  },
  {
    q: "Trong CSS, thuộc tính nào dùng để định dạng màu chữ?",
    options: {
      A: "color",
      B: "Font-color",
      C: "text-color",
      D: "font color"
    },
    answer: "A",
    explanation: "Thuộc tính `color` trong CSS dùng để thay đổi màu sắc hiển thị của chữ (văn bản)."
  },
  {
    q: "Thuộc tính nào trong CSS dùng để định dạng chữ nghiêng?",
    options: {
      A: "text-decoration",
      B: "text-transform",
      C: "italic",
      D: "font-style"
    },
    answer: "D",
    explanation: "Thuộc tính `font-style: italic` dùng để thiết lập văn bản hiển thị dưới dạng chữ nghiêng."
  },
  {
    q: "Thuộc tính nào để làm mờ đối tượng ?",
    options: {
      A: "opacity",
      B: "blur",
      C: "transparent",
      D: "Tất cả đều sai"
    },
    answer: "A",
    explanation: "Thuộc tính `opacity` có giá trị từ 0 (trong suốt hoàn toàn) đến 1 (hiển thị rõ nét) được dùng để làm mờ đối tượng."
  },
  {
    q: "Thuộc tính nào thay đổi kích cỡ chữ?",
    options: {
      A: "font-size",
      B: "font-style",
      C: "text-style",
      D: "text-size"
    },
    answer: "A",
    explanation: "Thuộc tính `font-size` quy định kích thước chữ hiển thị trong CSS."
  },
  {
    q: "Chọn thứ tự định dạng liên kết đúng ?",
    options: {
      A: "`link > hover > visited > active`",
      B: "`link > acitve > visisted > hover`",
      C: "`link > visited > hover > active`",
      D: "Tất cả đều sai"
    },
    answer: "C",
    explanation: "Thứ tự áp dụng pseudo-class cho liên kết chuẩn trong CSS là: `:link`, `:visited`, `:hover`, `:active` (LoVe/HAte)."
  },
  {
    q: "Thuộc tính CSS nào định dạng liên kết không có gạch chân?",
    options: {
      A: "`text-align : none`",
      B: "`text-decoration : none`",
      C: "`text-decoration : underline`",
      D: "`text-underline : none`"
    },
    answer: "B",
    explanation: "Sử dụng `text-decoration: none` để loại bỏ đường gạch chân mặc định dưới liên kết `<a>`."
  },
  {
    q: "Thuộc tính CSS nào định dạng đường biên (border) table nét đơn?",
    options: {
      A: "`border-collapse : separate`",
      B: "`border-collapse :  1px`",
      C: "`border-line : collapse`",
      D: "`border-collapse : collapse`"
    },
    answer: "D",
    explanation: "Thiết lập `border-collapse: collapse` để gộp các đường viền đôi của bảng thành một đường viền nét đơn duy nhất."
  },
  {
    q: "Thuộc tính CSS nào định dạng đối tường nằm một hàng riêng biệt?",
    options: {
      A: "`display: none`",
      B: "`display: block`",
      C: "`display: inline`",
      D: "`display: inline-block`"
    },
    answer: "B",
    explanation: "Giá trị `display: block` làm cho phần tử hiển thị dưới dạng khối, tự động xuống dòng và chiếm trọn chiều rộng hàng chứa."
  },
  {
    q: "Thuộc tính CSS nào định dạng bo góc một đối tượng với màu nền chỉ định?",
    options: {
      A: "border-conner",
      B: "border-radius",
      C: "border-radian",
      D: "border -rounded"
    },
    answer: "B",
    explanation: "Thuộc tính `border-radius` được sử dụng để bo tròn các góc của phần tử trong CSS."
  },
  {
    q: "Chọn thứ tự định dạng các góc?",
    options: {
      A: "top-left, bottom-right, top-right, bottom-left",
      B: "top-left, top-right, bottom-right, bottom-left",
      C: "top-right, bottom-right, bottom-left, top-left",
      D: "top-left, top-right, bottom-left, bottom-right"
    },
    answer: "B",
    explanation: "Khi khai báo 4 giá trị cho thuộc tính viền/bo góc, thứ tự áp dụng là: Top-Left, Top-Right, Bottom-Right, Bottom-Left (theo chiều kim đồng hồ)."
  },
  {
    q: "Nếu viết padding: 20px 50px 10px 30px thì padding-left là bao nhiêu?",
    options: {
      A: "10px",
      B: "50px",
      C: "20px",
      D: "30px"
    },
    answer: "D",
    explanation: "Thứ tự của padding 4 giá trị là: Top, Right, Bottom, Left. Do đó, padding-left (giá trị thứ tư) là 30px."
  },
  {
    q: "Nếu viết padding: 20px 40px 30px thì padding-left và padding-right là bao nhiêu?",
    options: {
      A: "40px – 30px",
      B: "40px – 40px",
      C: "20px – 40px",
      D: "20px – 30px"
    },
    answer: "B",
    explanation: "Khi khai báo 3 giá trị padding (Top, Left/Right, Bottom), padding-left và padding-right sẽ dùng chung giá trị thứ hai là 40px."
  },
  {
    q: "Chọn khai báo quan hệ Child selector giữa div và p ?",
    options: {
      A: "div ~ p",
      B: "`div > p`",
      C: "div + p",
      D: "div * p"
    },
    answer: "B",
    explanation: "Cú pháp `div > p` chọn tất cả các thẻ `<p>` là con trực tiếp (child) của thẻ `div`."
  },
  {
    q: "Bạn cảm thấy việc ôn trắc nghiệm thế này có hữu ích không?",
    options: {
      A: "Hữu ích",
      B: "Không hữu ích",
      C: "Bình thường",
      D: "Không nên ôn"
    },
    answer: ["A", "B", "C", "D"],
    explanation: "Đây là câu hỏi khảo sát ý kiến cá nhân trên website gốc."
  },
  {
    q: "Thuộc tính nào xác định tốc độ chuyển động của thẻ <marquee>?",
    options: {
      A: "scrollamount",
      B: "behavior",
      C: "direction",
      D: "loop"
    },
    answer: "A",
    explanation: "Thuộc tính `scrollamount` quy định số pixel di chuyển sau mỗi khoảng thời gian, quyết định tốc độ của thẻ `<marquee>`."
  },
  {
    q: "Ô nhập liệu nào sau đây có chiều rộng là 100px ?",
    options: {
      A: "`<input type=\"text\" width=\"100px\" />`",
      B: "`<input type=\"text\" style=\"width:100px\" />`",
      C: "Tất cả đều đúng",
      D: "Tất cả đều sai"
    },
    answer: "B",
    explanation: "Sử dụng thuộc tính CSS nội tuyến `style=\"width:100px\"` để thiết lập độ rộng chính xác cho phần tử."
  },
  {
    q: "Sử dung emmet trong vscode tao ra mã html sau:\n\n`<form action=\"\" name=\"f1\">`\n\n`< input type=\"text\" name=\"input1\"> < input type=\"text\" name=\"input2\">`\n\n`</form>`",
    options: {
      A: "`form[name=f1][action='']>input.type=text&name=input$*2`",
      B: "`form.name=f1[action='']> input[type=text][name='input$']*2`",
      C: "`form['name=f1'][action='']>input['type-text']['name'='input$']*2`",
      D: "`form[name=f1][action='']>input[type=text][name='input$']*2`"
    },
    answer: "D",
    explanation: "Cú pháp Emmet `form[name=f1][action=\"\"]>input[type=text][name=\"input$\"]*2` tạo form chứa 2 ô input có name tăng dần."
  },
  {
    q: "Đoạn văn bản nào sẽ có màu red:\n\n`<style> li:nth-child(2n+1){color:red;} </style>`\n\n`<ul>`\n\n`<li>Text1</li>`\n\n`<li>Text2</li>`\n\n`<li>Text3</li>`\n\n`<li>Text4</li>`\n\n`</ul>`",
    options: {
      A: "text1, text2",
      B: "text2, text4",
      C: "text1, text3",
      D: "text1, text2, text3, text4"
    },
    answer: "C",
    explanation: "Selector `li:nth-child(2n+1)` chọn các phần tử li ở vị trí lẻ (1, 3, ...), do đó Text1 và Text3 sẽ có màu đỏ."
  },
  {
    q: "Văn bản nào có màu đỏ:\n\n`<style>`\n\n`span, div.c2{color:red;}`\n\n`</style>`\n\n`<div class=\"c1\">Text1</div>`\n\n`<p>Text2</p><span>Text3</span>`",
    options: {
      A: "Text1",
      B: "Text2",
      C: "Text3",
      D: "Tất cả đều đúng"
    },
    answer: "C",
    explanation: "Thẻ `<span>Text3</span>` khớp với selector `span` nên Text3 sẽ có màu đỏ."
  },
  {
    q: "Định nghĩa CSS sau có ý nghĩa gì?\n\n`input:focus { background-color: red; }`",
    options: {
      A: "Các thẻ input có id là focus sẽ có nền màu đỏ",
      B: "Các thẻ input khi mất focus sẽ có nền màu đỏ",
      C: "Các thẻ input có class là focus sẽ có nền màu đỏ",
      D: "Các thẻ input khi được chọn (focus) sẽ có nền màu đỏ"
    },
    answer: "D",
    explanation: "Selector `:focus` kích hoạt khi phần tử (như ô input) được nhấp chọn hoặc nhận tiêu điểm."
  },
  {
    q: "Để upload file bằng form, cần thiết lập thuộc tính nào đúng?",
    options: {
      A: "enctype=\"multipart/form-data\" và method=\"get\"",
      B: "enctype=\"multipart/form-data\" và method=\"post\"",
      C: "enctype=\"multipart/file\" và method=\"post\"",
      D: "Tất cả đều đúng"
    },
    answer: "B",
    explanation: "Để upload file, form phải sử dụng thuộc tính `enctype=\"multipart/form-data\"` và gửi bằng phương thức `method=\"post\"`."
  },
  {
    q: "Để hiển thị 2 khoảng trắng giữa text1 và text2 trên trình duyệt, cách nào đúng?",
    options: {
      A: "text1 text2 (2 khoảng trắng)",
      B: "text1  text2",
      C: "Cả a và b đúng",
      D: "Cả a và b sai"
    },
    answer: "B",
    explanation: "Ký tự thực thể `&nbsp;` (non-breaking space) được dùng để chèn khoảng trắng cứng trong HTML mà không bị trình duyệt tự động gộp lại."
  },
  {
    q: "Để chèn hình `1.jpg` nằm trong thư mục cha, cú pháp đúng là:",
    options: {
      A: "`<img src=\"/1.jpg\">`",
      B: "`<img src=\"1.jpg\">`",
      C: "`<img src=\"../../1.jpg\">`",
      D: "`<img src=\"../1.jpg\">`"
    },
    answer: "D",
    explanation: "Đường dẫn `../` đại diện cho thư mục cấp cha chứa thư mục hiện tại."
  },
  {
    q: "Đâu là cú pháp tạo link đến Zalo với số điện thoại 0903762699 đúng?",
    options: {
      A: "`<a href=\"http://zalo.me/0903762699\">Zalo</a>`",
      B: "`<a href=\"zalo.me/0903762699\">Zalo</a>`",
      C: "`<a zalo=\"http://zalo.me/0903762699\">Zalo</a>`",
      D: "Tất cả đều đúng"
    },
    answer: "A",
    explanation: "Sử dụng liên kết dạng URL `http://zalo.me/sodt` để dẫn trực tiếp tới cửa sổ chat Zalo."
  },
  {
    q: "Cách chèn video v1.mp4 vào trang web đúng chuẩn `HTML5` là:",
    options: {
      A: "`<video src=\"v1.mp4\"></video>`",
      B: "`<video controls><source src=\"v1.mp4\" type=\"video/mp4\"></video>`",
      C: "`<mp4 src=\"v1.mp4\"></mp4>`",
      D: "Cả a và b đúng"
    },
    answer: "B",
    explanation: "Thẻ `<video>` chuẩn HTML5 sử dụng thẻ `<source>` bên trong để định nghĩa nguồn video và định dạng type."
  },
  {
    q: "Để thiết lập hình nền cho bảng (`table`), cách nào đúng theo `HTML hiện đại`?",
    options: {
      A: "`Dùng thuộc tính background trong thẻ <table>`",
      B: "`Dùng thuộc tính bgcolor trong thẻ <table>`",
      C: "Dùng CSS background cho table",
      D: "Cả a và b đúng"
    },
    answer: "C",
    explanation: "Trong thiết kế web hiện đại, ta dùng CSS thuộc tính `background` hoặc `background-image` cho bảng thay vì các thuộc tính HTML cũ."
  },
  {
    q: "Để tạo ô nhập liệu nhiều dòng, dùng thẻ nào?",
    options: {
      A: "`<input type=\"text\">`",
      B: "`<input type=\"multitext\">`",
      C: "`<textarea></textarea>`",
      D: "`<text></text>`"
    },
    answer: "C",
    explanation: "Thẻ `<textarea>` dùng để tạo hộp nhập liệu văn bản nhiều dòng trong form HTML."
  },
  {
    q: "Để chọn sẵn một option trong thẻ `<select>`, cần dùng thuộc tính nào?",
    options: {
      A: "selected",
      B: "checked",
      C: "select",
      D: "check"
    },
    answer: "A",
    explanation: "Thuộc tính `selected` gán cho thẻ `<option>` để làm cho tùy chọn đó được chọn mặc định khi load trang."
  },
  {
    q: "Để các nút `radio` chỉ chọn được một trong nhiều lựa chọn, cần:",
    options: {
      A: "Cùng id",
      B: "Cùng class",
      C: "Cùng name",
      D: "Cùng value"
    },
    answer: "C",
    explanation: "Các nút radio phải có chung thuộc tính `name` để trình duyệt gom nhóm chúng lại và chỉ cho phép chọn một tại một thời điểm."
  },
  {
    q: "Mã màu `#ffffff` là màu gì?",
    options: {
      A: "Mã màu #ffffff là màu gì?",
      B: "black",
      C: "blue",
      D: "green"
    },
    answer: "A",
    explanation: "Mã màu Hex `#ffffff` biểu diễn độ sáng tối đa cho cả R, G, B, tương ứng với màu Trắng (White)."
  },
  {
    q: "Đâu là cú pháp chú thích đúng trong CSS?",
    options: {
      A: "`/* ... */`",
      B: "`// ...`",
      C: "`// ...`",
      D: "Tất cả đều đúng"
    },
    answer: "A",
    explanation: "Trong CSS, chú thích phải nằm trong cặp ký tự `/* nội dung chú thích */`."
  },
  {
    q: "Thuộc tính CSS nào xác định ảnh nền đứng yên hay di chuyển khi scroll?",
    options: {
      A: "background-attachment",
      B: "background-position",
      C: "background-image",
      D: "background-repeat"
    },
    answer: "A",
    explanation: "Thuộc tính `background-attachment: fixed` giữ ảnh nền cố định khi cuộn trang, còn `scroll` sẽ cuộn theo nội dung."
  },
  {
    q: "Để chuyển văn bản thành chữ in hoa, dùng thuộc tính:",
    options: {
      A: "letter-spacing",
      B: "word-spacing",
      C: "text-transform",
      D: "uppercase"
    },
    answer: "C",
    explanation: "Sử dụng thuộc tính CSS `text-transform: uppercase` để chuyển toàn bộ ký tự sang dạng in hoa."
  },
  {
    q: "Để liên kết file CSS ngoài vào HTML:",
    options: {
      A: "`<style src=\"my.css\">`",
      B: "`<link rel=\"stylesheet\" href=\"style.css\">`",
      C: "`<script href=\"style.css\">`",
      D: "`<style>my.css</style>`"
    },
    answer: "B",
    explanation: "Sử dụng thẻ `<link rel=\"stylesheet\" href=\"style.css\">` trong phần `<head>` để nhúng file CSS ngoại vi."
  },
  {
    q: "Để định nghĩa CSS nội bộ (internal CSS), dùng thẻ:",
    options: {
      A: "`<style>`",
      B: "`<link>`",
      C: "`<css>`",
      D: "`<internal>`"
    },
    answer: "A",
    explanation: "CSS nội bộ được viết trực tiếp trong trang HTML bằng thẻ `<style>`."
  },
  {
    q: "Thuộc tính HTML dùng để viết inline CSS là:",
    options: {
      A: "css",
      B: "font",
      C: "class",
      D: "style"
    },
    answer: "D",
    explanation: "Thuộc tính `style` được dùng trực tiếp trên thẻ HTML để áp dụng CSS nội tuyến."
  },
  {
    q: "Cú pháp CSS đúng là:",
    options: {
      A: "`Body {color=red}`",
      B: "`Body:color=red`",
      C: "`body {color: red;}`",
      D: "`body {color: red;}`"
    },
    answer: "C",
    explanation: "Cú pháp CSS chuẩn có dạng: `selector { property: value; }`."
  },
  {
    q: "Phần tử nào là inline mặc định?",
    options: {
      A: "div",
      B: "p",
      C: "span",
      D: "h1"
    },
    answer: "C",
    explanation: "Thẻ `<span>` là phần tử nội dòng (inline) mặc định, không tự xuống dòng và chỉ chiếm không gian vừa đủ chứa nội dung."
  },
  {
    q: "Phần tử nào là block mặc định?",
    options: {
      A: "div",
      B: "p",
      C: "h1",
      D: "Tất cả đúng"
    },
    answer: "D",
    explanation: "Các thẻ tiêu đề (`<h1>`) và đoạn văn (`<p>`, `<div>`) mặc định hiển thị dưới dạng khối (block), tự động xuống dòng và chiếm hết chiều rộng dòng chứa."
  },
  {
    q: "Đâu là mã màu green (xanh lá)?",
    options: {
      A: "#0000ff",
      B: "#ff0000",
      C: "#00ff00",
      D: "#ffffff"
    },
    answer: "C",
    explanation: "Mã màu Hex `#00ff00` có giá trị Green là lớn nhất (ff) và Red, Blue bằng 00, đại diện cho màu xanh lá (green)."
  },
  {
    q: "Trong <table> thuộc tính màu nền là?",
    options: {
      A: "background",
      B: "bordercolor",
      C: "bgcolor",
      D: "background-color"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Tag nào dùng để tạo tiêu đề kích thước nhỏ nhất?",
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
    q: "Thuộc tính nào xác định tốc độ chuyển động của <marquee>?",
    options: {
      A: "scrollamount",
      B: "behavior",
      C: "direction",
      D: "loop"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính nào dùng để tạo gợi ý nhập liệu cho 1 text field?",
    options: {
      A: "recommend",
      B: "hint",
      C: "placeholder",
      D: "hint = “Nhập số”"
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
    q: "Thuộc tính nào trong CSS định dạng kiểu border phía top của element",
    options: {
      A: "border–style",
      B: "border-top-type",
      C: "border-top-family",
      D: "border-top-style"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Nếu viết padding: 20px 50px 10px 30px thì padding-bottom là bao nhiêu?",
    options: {
      A: "10px",
      B: "50px",
      C: "20px",
      D: "30px"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "CSS selector sau đây mang ý nghĩa gì?   ul > li[class=\"a\"] { }",
    options: {
      A: "selector các thẻ li con gián tiếp của ul và có class là a",
      B: "selector các thẻ li đồng cấp của ul và có class là a",
      C: "selector các thẻ li theo sau của ul và có class là a",
      D: "selector các thẻ li con trực tiếp của ul và có class là a"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Khi sử dụng thuộc tính display: flex, thì thuộc tính nào đi kèm xác định chiều của các item con trực tiếp",
    options: {
      A: "flex-t",
      B: "flex-grow",
      C: "flex-direction",
      D: "auto"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để định dạng màu nền cho các ô thuộc dòng đầu tiên của table có id là tbl1, mã css nào đúng?",
    options: {
      A: "table tr {background-color:#F00;}",
      B: "#tbl1 tr1 {background-color:#F00;}",
      C: "#tbl1 tr:first {background-color:#F00;}",
      D: "#tbl1 tr:first-child {background-color:#F00;}"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Chọn khai báo quan hệ Descendant Selector giữa div và p?",
    options: {
      A: "div ~ p",
      B: "div p",
      C: "div * p",
      D: "div + p"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Giá trị nào của thuộc tính position có cố định so với cửa sổ và không thay đổi khi scroll?",
    options: {
      A: "Absolute",
      B: "Fixed",
      C: "Relative",
      D: "Static"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "pseudo-class CSS đại diện cho phần tử cuối cùng trong nhóm các phần tử đồng cấp",
    options: {
      A: ":end-child",
      B: ":last-element",
      C: ":last-child",
      D: ":Cả 2,b,c đều sai"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Để kiểm tra nếu biến “i” không bằng 5, câu lệnh nào là đúng?",
    options: {
      A: "if (i != 5)",
      B: "if (i <> 5)",
      C: "if I <> 5",
      D: "if i !=5 then"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Hàm alert(...) trong JavaScript dùng để làm gì?",
    options: {
      A: "Hiển thị một thông báo Yes, No",
      B: "Hiển thị thông báo yêu cầu nhập thông tin",
      C: "Hiển thị một thông báo",
      D: "Không phương án nào đúng"
    },
    answer: "C",
    explanation: "Hàm `alert(...)` trong JavaScript dùng để hiển thị hộp thoại thông báo đơn giản với nội dung chỉ định và nút OK."
  },
  {
    q: "Đâu là kết quả của phép tính sau 2+6+'3'",
    options: {
      A: "83",
      B: "'83'",
      C: "11",
      D: "'11'"
    },
    answer: "B",
    explanation: "Phép cộng `2+6` thực hiện trước ra `8`. Sau đó `8 + '3'` (cộng số với chuỗi) sẽ chuyển số 8 thành chuỗi và thực hiện nối chuỗi, kết quả là `'83'`."
  },
  {
    q: "Trong JavaScript biểu thức x===y có nghĩa là:",
    options: {
      A: "Cả x và y đều bằng nhau về giá trị, kiểu và địa chỉ tham chiếu.",
      B: "Cả hai đều là x và y chỉ bằng nhau về giá trị.",
      C: "Cả hai đều bằng nhau về giá trị và kiểu dữ liệu.",
      D: "Cả hai đều không giống nhau chút nào."
    },
    answer: "C",
    explanation: "Toán tử so sánh tuyệt đối `===` kiểm tra xem hai giá trị có bằng nhau cả về giá trị lẫn kiểu dữ liệu hay không."
  },
  {
    q: "Trong JavaScript sự kiện Onblur thực hiện khi nào?",
    options: {
      A: "Khi di chuyển con chuột qua form",
      B: "Khi một đối tượng trong form mất focus",
      C: "Khi một đối tượng trong form nhận focus",
      D: "Khi di chuyển con chuột vào nút lệnh"
    },
    answer: "B",
    explanation: "Sự kiện `onblur` xảy ra khi phần tử (như ô input) bị mất tiêu điểm (mất focus) khi người dùng click ra ngoài."
  },
  {
    q: "Hàm nào trong JavaScript được sử dụng để chọn tất cả các đối tượng có class=“selector”?",
    options: {
      A: "querySelectorAll()",
      B: "querySelector()",
      C: "getElementByClass()",
      D: "Cả a,b,c đều sai"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Cách khai báo mảng nào trong javascript là đúng?",
    options: {
      A: "var colors = 1:(\"red\"), 2:(\"green\"), 3 = (\"blue\")",
      B: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
      C: "var colors = [\"red\", \"green\", \"blue\"]",
      D: "var colors = \"red\", \"green\", \"blue\""
    },
    answer: "C",
    explanation: "Khai báo mảng chuẩn trong JavaScript sử dụng dấu ngoặc vuông: `var colors = [\"red\", \"green\", \"blue\"]`."
  },
  {
    q: "Để truy cập, lấy giá trị phần tử trong form có id=n ra biến x, mã javascript là",
    options: {
      A: "x = document.getElementById(n);",
      B: "x = document.getElementById('n').value;",
      C: "x = document.frm.n.value();",
      D: "x = document.frm.n.value;"
    },
    answer: "B",
    explanation: "Để lấy giá trị của phần tử có ID trong JavaScript thuần, ta dùng `document.getElementById('n').value`."
  },
  {
    q: "Cho mảng arr = ['aa','bb','cc','dd']; để xóa ‘aa’, ‘bb’ và ‘cc’ mã javascript là:",
    options: {
      A: "arr.splice(0,1);",
      B: "arr.splice(0,2);",
      C: "arr.splice(1,3);",
      D: "arr.splice(1,2);",
      E: "Arr.splice(0,3); (trên đáp án ko có nhé)"
    },
    answer: "E",
    explanation: "Hàm `splice(index, count)` dùng để xóa phần tử. Ở đây `splice(1, 2)` bắt đầu từ vị trí 1 ('bb') và xóa đi 2 phần tử ('bb' và 'cc')."
  },
  {
    q: "Để ẩn phần tử có id=txt, mã javascript là:",
    options: {
      A: "document.getElementById('txt').display = 'none';",
      B: "document.getElementById('txt').style.display = 'none';",
      C: "document.getElementById('txt').css.display = 'none';",
      D: "document.getElementById('txt').style.display = 'hide';"
    },
    answer: "B",
    explanation: "Để ẩn phần tử bằng JavaScript thuần, ta gán thuộc tính `.style.display = 'none'`."
  },
  {
    q: "Để đổi kích thước chữ của phần tử có id=txt thành 60px, mã javascript là:",
    options: {
      A: "document.getElementById('txt').style.fontSize = '60px';",
      B: "document.getElementById('txt').css.fontSize = '60px';",
      C: "document.getElementById('txt').style.Size = '60px';",
      D: "document.getElementById('txt').fontSize = '60px';"
    },
    answer: "A",
    explanation: "Để đổi kích thước chữ bằng JavaScript thuần, ta gán thuộc tính `.style.fontSize = '60px'` (chú ý chữ S viết hoa trong lạc đà camelCase)."
  },
  {
    q: "Để xóa phần tử thứ 1 có class là class1 bằng jQuery là:",
    options: {
      A: "$('#class1')[0].remove();",
      B: "$('.class1')[0].remove();",
      C: "$('#class1')[1].remove();",
      D: "$('.class1')[1].remove();"
    },
    answer: "B",
    explanation: "Trong jQuery, selector `$(\".class1\")` trả về một mảng DOM. Ta chọn phần tử đầu tiên bằng chỉ số `[0]` và dùng hàm `.remove()` trong JS thuần."
  },
  {
    q: "Tìm phần tử thứ 2 <p> và thay đổi giá trị của phần tử đó thành \"Hello\", mã javascript là:",
    options: {
      A: "document.getElementsByName('p')[0].innerHTML = 'Hello';",
      B: "document.getElementsByName('p')[1].innerHTML = 'Hello';",
      C: "document.getElementsByTagName('p')[1].innerText = 'Hello';",
      D: "document.getElementsByTagName('p')[1].innerHTML = 'Hello';"
    },
    answer: "D",
    explanation: "Lệnh `document.getElementsByTagName('p')[1]` chọn thẻ `<p>` thứ hai, sau đó gán thuộc tính `.innerHTML = 'Hello'` để thay đổi nội dung."
  },
  {
    q: "Để đổi màu chữ của phần tử có name='n' thành 'red', mã javascript là:",
    options: {
      A: "document.getElementsByName('n').color='red';",
      B: "document.getElementsByName('n').add.color='red';",
      C: "document.getElementsByName('n').css.color='red';",
      D: "document.getElementsByName('n').style.color='red';"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để lấy giá trị tên thuộc tính đầu tiên của phần tử (nút) Button thứ 1 ra biến a, mã javascript là:",
    options: {
      A: "a = document.getElementsByName(\"BUTTON\")[0].attributes[0].name;",
      B: "a = document.getElementsByName(\"BUTTON\")[0].attributes[1].name;",
      C: "a = document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name;",
      D: "a = document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name;"
    },
    answer: "C",
    explanation: "Lệnh `document.getElementsByTagName(\"BUTTON\")[0]` chọn nút button thứ nhất, `.attributes[0].name` lấy tên của thuộc tính đầu tiên."
  },
  {
    q: "Để đánh dấu bookmark (liên kết trong) ta sử dụng cách nào sau đây?",
    options: {
      A: "`<a name=\"tên_bookmark\">...</a>`",
      B: "`<p id=\"tên_bookmark\">...</p>`",
      C: "`<a name=\"#tên_bookmark\">...</a>`",
      D: "Cả a và b"
    },
    answer: "D",
    explanation: "Có hai cách tạo liên kết trong trang (bookmark): dùng thẻ `<a>` có thuộc tính `name` hoặc gán thuộc tính `id` cho bất kỳ thẻ nào."
  },
  {
    q: "Trong <table> canh chỉnh nội dung các ô theo chiều dọc là?",
    options: {
      A: "align",
      B: "valign",
      C: "halign",
      D: "text-align"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong <table> để nối (trộn) các ô theo chiều ngang dùng thuộc tính?",
    options: {
      A: "colpan",
      B: "colspan",
      C: "rowpan",
      D: "rowspan"
    },
    answer: "B",
    explanation: "Thuộc tính `colspan` (column span) dùng để gộp các ô theo chiều ngang (cột) trong bảng."
  },
  {
    q: "Thêm gì vào <input type=\"text\" /> để có được gợi ý “Nhập số” như hình sau?",
    options: {
      A: "value=\"Nhập số\"",
      B: "comment=\"Nhập số\"",
      C: "hint=\"Nhập số\"",
      D: "placeholder=\"Nhập số\""
    },
    answer: "D",
    explanation: "Thuộc tính `placeholder` tạo văn bản gợi ý mờ hiển thị trong ô nhập liệu khi ô đó chưa có nội dung."
  },
  {
    q: "Trong thẻ <input type=\"text\" /> thuộc tính nào giới hạn số ký tự nhập vào?",
    options: {
      A: "size",
      B: "width",
      C: "maxlength",
      D: "value"
    },
    answer: "C",
    explanation: "Thuộc tính `maxlength` (viết trong quiz là `maxlenght`) giới hạn số lượng ký tự tối đa người dùng có thể nhập vào textfield."
  },
  {
    q: "Cú pháp CSS nào được sử dụng để chuyển tất cả các thẻ <p> thành chữ in đậm?",
    options: {
      A: "p {text-size:bold}",
      B: "p {font-weight:bold}",
      C: "style:bold",
      D: "p {font:bold}"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính và giá trị CSS nào dùng để chuyển tất cả các ký tự đầu chữ viết hoa?",
    options: {
      A: "text-transform: uppercase",
      B: "text-transform: capitaliza",
      C: "text-transform: proper",
      D: "Không thể làm được với CSS"
    },
    answer: "B",
    explanation: "Thuộc tính `text-transform: capitalize` viết hoa chữ cái đầu tiên của mỗi từ (lựa chọn trong quiz ghi sai chính tả là `capitaliza`)."
  },
  {
    q: "Khi sử dụng thuộc tính display: flex, thuộc tính nào đi kèm để xác định chiều của các item trực tiếp?",
    options: {
      A: "flex-direction",
      B: "flex-grow",
      C: "flex-t",
      D: "auto"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Giá trị nào của thuộc tính position cố định so với cửa sổ và không thay đổi khi scroll?",
    options: {
      A: "Absolute",
      B: "Fixed",
      C: "Relative",
      D: "Static"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Chọn khai báo quan hệ Adjacent Sibling Selector giữa div và p?",
    options: {
      A: "div ~ p",
      B: "div > p",
      C: "div + p",
      D: "div * p"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "JavaScript là ngôn ngữ dịch mà nguồn theo kiểu nào?",
    options: {
      A: "Biên dịch",
      B: "Thông dịch",
      C: "Cả biên dịch và thông dịch",
      D: "Không có dạng nào"
    },
    answer: "B",
    explanation: "JavaScript là ngôn ngữ thông dịch (interpreted language), trình duyệt sẽ dịch và thực thi trực tiếp từng dòng mã nguồn lúc chạy."
  },
  {
    q: "Hàm prompt(…) trong JavaScript dùng để làm gì?",
    options: {
      A: "Hiển thị một thông báo",
      B: "Hiển thị một thông báo Yes, No",
      C: "Hiển thị thông báo yêu cầu nhập thông tin",
      D: "Không phương án nào đúng"
    },
    answer: "C",
    explanation: "Hàm `prompt(...)` hiển thị hộp thoại thông báo có ô nhập liệu để yêu cầu người dùng nhập thông tin."
  },
  {
    q: "Form có name=frm, để lấy giá trị phần tử trong form có name=n ra biến x, mã JavaScript là",
    options: {
      A: "x = document.frm.n.value;",
      B: "x = document.frm.n.value();",
      C: "x = document.getElementByName('n');",
      D: "x = document.getElementsByName('n').value;"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Tìm phần tử đầu tiên <p> và thay đổi giá trị của phần tử đó thành \"Hello\", mã JavaScript là",
    options: {
      A: "document.getElementsByTagName('p')[0].innerHTML = 'Hello';",
      B: "document.getElementsByTagName('p')[0].innerHTML = “Hello”;",
      C: "document.getElementsByTagName('p')[1].innerHTML = 'Hello';",
      D: "document.getElementsTagName('p')[0].innerText = 'Hello';"
    },
    answer: "A",
    explanation: "Lệnh `document.getElementsByTagName('p')[0]` chọn thẻ `<p>` đầu tiên, sau đó gán thuộc tính `.innerHTML = 'Hello'` để thay đổi nội dung."
  },
  {
    q: "Để lấy giá trị tên thuộc tính đầu tiên của phần tử (nút) Button thứ 2 biến a, mã JavaScript là",
    options: {
      A: "a = document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name;",
      B: "a = document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name;",
      C: "a = document.getElementsByName(\"BUTTON\")[0].attributes[0].name; (sai do dùng getElementsByName)",
      D: "a = document.getElementsByName(\"BUTTON\")[0].attributes[1].name;"
    },
    answer: "B",
    explanation: "Lệnh `document.getElementsByTagName(\"BUTTON\")[1]` chọn nút button thứ hai, `.attributes[0].name` lấy tên của thuộc tính đầu tiên."
  },
  {
    q: "Cho mảng arr = ['aa','bb','cc','dd']; để xoá 'bb' và 'cc' mã JavaScript là",
    options: {
      A: "arr.splice(1,1);",
      B: "arr.splice(1,3);",
      C: "arr.splice(2,3);",
      D: "arr.splice(1,2);"
    },
    answer: "D",
    explanation: "Hàm `splice(index, count)` dùng để xóa phần tử. Ở đây `splice(1, 2)` bắt đầu từ vị trí 1 ('bb') và xóa đi 2 phần tử ('bb' và 'cc')."
  },
  {
    q: "Để xoá phần tử thứ 2 có class là class1 bằng jQuery là:",
    options: {
      A: "$('.class1')[0].remove();",
      B: "$('#class1')[0].remove();",
      C: "$('.class1')[1].remove();",
      D: "$('#class1')[1].remove();"
    },
    answer: "C",
    explanation: "Trong jQuery, selector `$(\".class1\")` trả về danh sách phần tử. Phần tử thứ hai nằm ở chỉ số `[1]`, ta dùng `.remove()` để xóa nó."
  },
  {
    q: "Thẻ HTML nào được sử dụng để trỏ tới external style sheet?",
    options: {
      A: "`<link url= “stylesheet” type= “text/css” href=”style.css”>`",
      B: "`<style src=”style.css”>`",
      C: "`<link rel= “stylesheet” type= “text/css” href=”style.css”>`",
      D: "`<stylesheet>style.css</stylesheet>`"
    },
    answer: "C",
    explanation: "Sử dụng thẻ `<link rel=\"stylesheet\" href=\"style.css\">` trong phần `<head>` để nhúng file CSS ngoại vi."
  },
  {
    q: "Đặt dòng liên kết với file CSS ở vùng nào trong trang HTML?",
    options: {
      A: "`Trong thẻ <head>`",
      B: "`Trong thẻ <body>`",
      C: "Ở cuối trang HTML",
      D: "Ở đầu trang HTML"
    },
    answer: "A",
    explanation: "Dòng liên kết với file CSS ngoại vi thường được đặt trong thẻ `<head>` của tài liệu HTML."
  },
  {
    q: "Thuộc tính nào của thẻ <input type=”text” > để giới hạn số ký tự nhập vào?",
    options: {
      A: "limit",
      B: "chars",
      C: "maxchar",
      D: "maxlenght"
    },
    answer: "D",
    explanation: "Thuộc tính `maxlength` (viết trong quiz là `maxlenght`) giới hạn số lượng ký tự tối đa người dùng có thể nhập vào textfield."
  },
  {
    q: "Thẻ HTML nào được sử dụng để khởi tạo internal style sheet?",
    options: {
      A: "`<style>`",
      B: "`<css>`",
      C: "`<script>`",
      D: "`<stylesheet>`"
    },
    answer: "A",
    explanation: "Thẻ `<style>` được dùng để viết CSS nội bộ ngay trong tài liệu HTML."
  },
  {
    q: "Thuộc tính CSS nào dùng để ngăn không cho 1 đối tượng bị ảnh hưởng bởi các đối tượng được float trước đó?",
    options: {
      A: "clear",
      B: "anchor",
      C: "fixed",
      D: "static"
    },
    answer: "A",
    explanation: "Thuộc tính `clear: both/left/right` dùng để xóa thuộc tính float, ngăn phần tử tiếp theo bị trôi quanh phần tử float trước đó."
  },
  {
    q: "Nhóm các đối tượng có cùng thuộc tính và có thể được sử dụng nhiều lần là?",
    options: {
      A: "class",
      B: "id",
      C: "Cả class và id đều đúng",
      D: "Cả class và id đều sai"
    },
    answer: "A",
    explanation: "Thuộc tính `class` dùng để nhóm các phần tử có chung định dạng và có thể dùng nhiều lần trên trang (khác với `id` là duy nhất)."
  },
  {
    q: "Để bỏ biểu tượng đánh dấu các phần tử trong một danh sách không thứ tự (<ul>) dùng thuộc tính CSS nào sau đây?",
    options: {
      A: "list-style-type",
      B: "list-style",
      C: "style-image",
      D: "list-symbol"
    },
    answer: "A",
    explanation: "Thiết lập thuộc tính `list-style-type: none` trong CSS để ẩn biểu tượng chấm tròn đầu dòng của danh sách `<ul>`."
  },
  {
    q: "Cú pháp CSS nào được sử dụng để chuyển tất cả các thẻ <p> thành bold?",
    options: {
      A: "`p {text-size:bold}`",
      B: "`p {font-weight:bold}`",
      C: "`background-attachment: scroll`",
      D: "Tất cả đều sai"
    },
    answer: "B",
    explanation: "Thuộc tính `font-weight: bold` được dùng để thiết lập văn bản in đậm cho phần tử."
  },
  {
    q: "Thuộc tính và giá trị CSS nào dùng để chuyển tất cả các ký tự đầu thành chứ viết hoa?",
    options: {
      A: "`text-transform:uppercase`",
      B: "`text-transform:capitaliza`",
      C: "`text-transform:proper`",
      D: "Không thể làm được với CSS"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong CSS, thuộc tính nào để hiển thị nội dung text dưới dạng bold?",
    options: {
      A: "`font:b`",
      B: "`font:bold`",
      C: "`style:bold`",
      D: "`font-weight:bold`"
    },
    answer: "D",
    explanation: "Thuộc tính CSS chuẩn để viết chữ đậm là `font-weight: bold`."
  },
  {
    q: "Thuộc tính nào để tạo danh sách hiển thị tất cả các thành phần trong ô vuông?",
    options: {
      A: "`type:square`",
      B: "`list-style-type: square`",
      C: "`list-type: square`",
      D: "`style-type: square`"
    },
    answer: "B",
    explanation: "Sử dụng thuộc tính `list-style-type: square` để chuyển biểu tượng đầu dòng của danh sách sang hình ô vuông."
  },
  {
    q: "Chọn thứ tự định dạng liên kết trong CSS?",
    options: {
      A: "`a:link > a:visited > a :hover > a:active`",
      B: "`a:visited > a:link > a :hover > a:active`",
      C: "`a:link > a :hover >  a:visited > a:active`",
      D: "`a:active > a:link > a:visited > a :hover`"
    },
    answer: "A",
    explanation: "Thứ tự áp dụng pseudo-class cho liên kết chuẩn trong CSS là: `:link`, `:visited`, `:hover`, `:active` (LoVe/HAte)."
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n<div>\n<a href=\"#\">A</a>\n<a href=\"#\"><b>B</b></a>\n<b><a href=\"#\">C</a></b>\n</div>\n\ndiv, a{color:yellow}\n\nHỏi nội dung nào có màu vàng ?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "Tất cả đều đúng"
    },
    answer: "D",
    explanation: "Selector `div, a` áp dụng thuộc tính màu vàng cho cả thẻ `div` và tất cả các thẻ `a`, do đó tất cả các nội dung hiển thị sẽ có màu vàng."
  },
  {
    q: "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id^=’abc’]",
    options: {
      A: "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc",
      B: "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc",
      C: "Những thẻ input mà thuộc tính id có giá trị chứa abc",
      D: "Tất cả đều sai"
    },
    answer: "A",
    explanation: "Selector `input[id^='abc']` chọn các thẻ input có thuộc tính id bắt đầu bằng chuỗi 'abc' (ký tự `^` nghĩa là bắt đầu)."
  },
  {
    q: "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id$=’abc’]",
    options: {
      A: "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc",
      B: "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc",
      C: "Những thẻ input mà thuộc tính id có giá trị chứa abc",
      D: "Tất cả đều sai"
    },
    answer: "B",
    explanation: "Selector `input[id$='abc']` chọn các thẻ input có thuộc tính id kết thúc bằng chuỗi 'abc' (ký tự `$` nghĩa là kết thúc)."
  },
  {
    q: "Để xóa nội dung của thẻ div có id=id1, đoạn lệnh nào sau đúng?",
    options: {
      A: "document.getElementById('id1').innerHTML='';",
      B: "document.getElementById('id1').HTML='';",
      C: "document.getElementById('id1').value='';",
      D: "document.getElementById('id1').delete()';"
    },
    answer: "A",
    explanation: "Gán thuộc tính `innerHTML` của phần tử bằng chuỗi rỗng `''` để xóa sạch toàn bộ nội dung HTML bên trong phần tử đó."
  },
  {
    q: "Để truy xuất lấy giá trị phần tử textbox có name=n ra biến x, mã javascript là ?",
    options: {
      A: "x = docuemnt.frm.n.value;",
      B: "x = docuemnt.frm.n.value();",
      C: "x = document.getElementByName('n');",
      D: "x = document.getElementsByName('n').value;"
    },
    answer: "A",
    explanation: "Để lấy giá trị của textbox từ form theo name trong Javascript thuần, ta truy cập qua `document.getElementsByName('n')[0].value` hoặc `document.formName.inputName.value`."
  },
  {
    q: "Để thay đổi màu chữ trong thẻ div có id=id1, câu lệnh javascript nào đúng?",
    options: {
      A: "document.getElementById('id1').style.color='red';",
      B: "document.getElementById('id1').style.color('red');",
      C: "document.getElementById('id1').color='red';",
      D: "document.getElementById('id1').color('red');"
    },
    answer: "A",
    explanation: "Sử dụng `.style.color` để truy cập và thay đổi thuộc tính màu chữ của phần tử thông qua Javascript."
  },
  {
    q: "Phương thức nào của jQuery ngăn ngừa code chạy trước khi trang web load xong?",
    options: {
      A: "$(document).ready();",
      B: "$(document).load();",
      C: "$(body).onload();",
      D: "$(body).load();"
    },
    answer: "A",
    explanation: "Phương thức `$(document).ready()` trong jQuery đảm bảo rằng mã Javascript chỉ chạy sau khi toàn bộ cấu trúc DOM của trang đã được tải xong."
  },
  {
    q: "Cách ẩn phần tử được chọn trong jQuery, sử dụng phương thức nào?",
    options: {
      A: "hide();",
      B: "visible(false);",
      C: "hidden();",
      D: "display(none);"
    },
    answer: "A",
    explanation: "Phương thức `.hide()` trong jQuery được sử dụng để ẩn phần tử được chọn (tương đương với thiết lập `display: none` trong CSS)."
  },
  {
    q: "Thẻ div nào sau đây có chiều rộng là 100px?",
    options: {
      A: "`<div style=\"width=100px\"></div>`",
      B: "`<div width:\"100px\"></div>`",
      C: "`<div width=\"100px\"></div>`",
      D: "`<div style=\"width:100px\"></div>`"
    },
    answer: "D",
    explanation: "Thiết lập CSS nội tuyến `style=\"width:100px\"` để gán độ rộng cho thẻ div (các thuộc tính HTML cũ như `width` không hợp lệ cho `div`)."
  },
  {
    q: "Thuộc tính gì của thẻ option để xác định phần tử đó được chọn?",
    options: {
      A: "checked",
      B: "default",
      C: "Tất cả đều đúng",
      D: "Tất cả đều sai"
    },
    answer: "D",
    explanation: "Trong HTML, thuộc tính dùng để chọn sẵn một thẻ `<option>` là `selected`. Vì các phương án `checked` (dành cho checkbox/radio) hay `default` đều sai, nên chọn 'Tất cả đều sai'."
  },
  {
    q: "Thuộc tính nào của thẻ input dùng để xác định giá trị khởi tạo cho textfield?",
    options: {
      A: "init",
      B: "initvalue",
      C: "value",
      D: "default"
    },
    answer: "C",
    explanation: "Thuộc tính `value` của thẻ `<input>` xác định giá trị mặc định được điền sẵn trong ô nhập liệu khi load trang."
  },
  {
    q: "Thuộc tính nào trong CSS để làm mờ đối tượng",
    options: {
      A: "transparent",
      B: "blur",
      C: "opacity",
      D: "Tất cả đều sai"
    },
    answer: "C",
    explanation: "Thuộc tính `opacity` dùng để đặt độ mờ/trong suốt cho phần tử, giá trị từ 0 (trong suốt) đến 1 (hiển thị đầy đủ)."
  },
  {
    q: "Thuộc tính z-index dùng để?",
    options: {
      A: "Định vị tương đối cho một thành phần",
      B: "Quy định kiểu viền của một đối tượng web",
      C: "Tạo hiệu ứng màu sắc cho liên kết",
      D: "Đặt các thành phần web ở các lớp khác nhau"
    },
    answer: "D",
    explanation: "Thuộc tính `z-index` xác định thứ tự xếp chồng lên nhau của các phần tử đã được định vị (position), quyết định phần tử nào nằm trên hay dưới lớp khác."
  },
  {
    q: "Lựa chọn thiết lập ảnh nền cố định?",
    options: {
      A: "`background-attachment: fix`",
      B: "`background-attachment: fixed`",
      C: "`background-attachment: scroll`",
      D: "Tất cả đều sai"
    },
    answer: "B",
    explanation: "Thuộc tính `background-attachment: fixed` dùng để cố định ảnh nền tại chỗ, không bị di chuyển khi cuộn trang."
  },
  {
    q: "Thuộc tính CSS nào định dạng đối tượng nằm một hàng riêng biệt?",
    options: {
      A: "`display: none`",
      B: "`display: block`",
      C: "`display: inline`",
      D: "`display: inline-block`"
    },
    answer: "B",
    explanation: "Giá trị `display: block` làm cho phần tử hiển thị dưới dạng khối, tự động xuống dòng và chiếm trọn chiều rộng hàng chứa."
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n`<div>\n\n<a href=\"#\">A</a>\n\n<a href=\"#\"><b>B</b></a>\n\n<b><a href=\"#\">C</a></b>\n\n</div>`\nMã HTML\n\n`div  b  a{color:blue}`\nMã CSS\n\nHỏi nội dung nào có màu xanh ?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "Tất cả đều đúng"
    },
    answer: "C",
    explanation: "Mã CSS `div b a` là bộ chọn con cháu (descendant selector), chọn thẻ `a` nằm trong thẻ `b` và thẻ `b` này phải nằm trong `div`. Do đó nội dung C có màu xanh."
  },
  {
    q: "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id*=’abc’]",
    options: {
      A: "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc",
      B: "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc",
      C: "Những thẻ input mà thuộc tính id có giá trị chứa abc",
      D: "Tất cả đều sai"
    },
    answer: "C",
    explanation: "Selector `input[id*='abc']` chọn các thẻ input có thuộc tính id chứa chuỗi 'abc' tại bất kỳ vị trí nào (ký tự `*` nghĩa là chứa)."
  },
  {
    q: "Phương thức nào của jQuery tương đương với thuộc tính innerHTML của javascript?",
    options: {
      A: "val();",
      B: "content();",
      C: "html();",
      D: "innerHTML();"
    },
    answer: "C",
    explanation: "Phương thức `.html()` trong jQuery tương đương với thuộc tính `.innerHTML` trong Javascript thuần, dùng để lấy hoặc gán nội dung HTML."
  },
  {
    q: "Phương thức nào của jQuery tương đương câu lệnh javascript: `document.getElementById(\"ID\").`",
    options: {
      A: "$(\"#ID\");",
      B: "$(\"ID\") ;",
      C: "$(\"id=ID\");",
      D: "$(\".ID\");"
    },
    answer: "A",
    explanation: "Trong jQuery, bộ chọn ID `$(\"#ID\")` tương đương với lệnh `document.getElementById(\"ID\")` trong Javascript thuần."
  },
  {
    q: "Chọn thứ tự giá trị thuộc tính đúng mã CSS sau?",
    options: {
      A: "`border: #333  1px  solid ;`",
      B: "`border: 1px  solid  #333;`",
      C: "`border: solid  1px  #333;`",
      D: "`border: 1px  #333  solid;`"
    },
    answer: "B",
    explanation: "Cú pháp viết tắt viền chuẩn trong CSS là: `border: width style color;` (ví dụ: `border: 1px solid #333;`)."
  },
  {
    q: "Nếu viết padding: 20px 40px 30px thì padding-top và padding-bottom là bao nhiêu?",
    options: {
      A: "40px – 30px",
      B: "20px – 30px",
      C: "20px – 40px",
      D: "30px – 40px"
    },
    answer: "B",
    explanation: "Khai báo 3 giá trị padding (Top, Left/Right, Bottom). Do đó padding-top là 20px và padding-bottom là 30px."
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n<div>\n<a href=\"#\">A</a>\n<b><a href=\"#\">B</a></b>\n</div>\n<a href=\"#\">C</a>\n\ndiv > a{color:red}\n\nHỏi nội dung nào có màu đỏ ?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "Tất cả đều đúng"
    },
    answer: "A",
    explanation: "Selector con trực tiếp `div > a` chọn các thẻ `a` là con trực tiếp của `div` (không nằm trong thẻ con khác của `div`). Do đó chỉ có A được chọn."
  },
  {
    q: "Thuộc tính CSS nào định dạng đối tượng ẩn nhưng vẫn chiếm vùng không gian?",
    options: {
      A: "`display: none`",
      B: "`display: block`",
      C: "`display: inline`",
      D: "`visibility: hidden`"
    },
    answer: "D",
    explanation: "Thuộc tính `visibility: hidden` ẩn phần tử nhưng vẫn giữ nguyên kích thước và vị trí của nó trên layout, không làm dịch chuyển các phần tử khác."
  },
  {
    q: "Nếu có đoạn mã HTML và CSS như sau:\n\n<div>\n<a href=\"#\">A</a>\n<b><a href=\"#\">B</a></b>\n<a href=\"#\">C</a>\n</div>\n\ndiv > a{color:green}\n\nHỏi nội dung nào có màu xanh ?",
    options: {
      A: "A",
      B: "B",
      C: "A và C",
      D: "Tất cả đều đúng"
    },
    answer: "C",
    explanation: "Selector `div > a` chọn các thẻ `a` là con trực tiếp của `div`. Trong đoạn HTML, thẻ A và thẻ C đều là con trực tiếp của div (thẻ B nằm trong `<b>` nên không thỏa mãn)."
  },
  {
    q: "Để chèn 1 file CSS vào trang HTML thì cú pháp nào đúng?",
    options: {
      A: "`<style rel=\"stylesheet\" src=\"...\"></style>`",
      B: "`<a rel=\"stylesheet\" href=\"...\"></a>`",
      C: "`<file rel=\"stylesheet\"  href=\"...\"></file>`",
      D: "`<div style=\"width:100px\"></div>`",
      E: "Chả cái nào đúng hết đâu!"
    },
    answer: "E",
    explanation: "Cú pháp nhúng file CSS chuẩn là `<link rel=\"stylesheet\" href=\"style.css\">`. Vì không có phương án nào viết đúng thẻ và thuộc tính này, đáp án là 'Chả cái nào đúng hết đâu!'."
  },
  {
    q: "Nếu viết padding: 20px 50px thì padding-right là bao nhiêu?",
    options: {
      A: "10px",
      B: "50px",
      C: "20px",
      D: "50px - 50px"
    },
    answer: "B",
    explanation: "Khi khai báo padding 2 giá trị (Top/Bottom, Left/Right), padding-right sẽ dùng giá trị thứ hai là 50px."
  },
  {
    q: "Giá trị mặc định của thuộc tính float trong CSS là gì?",
    options: {
      A: "let",
      B: "right",
      C: "none",
      D: "inherit"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Khi một phần tử con được float, phần tử cha của nó sẽ:",
    options: {
      A: "Tự động điều chỉnh chiều cao để bao gồm phần tử con float",
      B: "Không bao gồm phần tử con float trong chiều cao của nó",
      C: "Trở thành vị trí tương đối",
      D: "Trở thành vị trí tuyệt đối"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Thuộc tính nào được sử dụng để thay đổi khoảng cách giữa các ký tự trong CSS?",
    options: {
      A: "letter-spacing",
      B: "character-spacing",
      C: "text-spacing",
      D: "word-spacing"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào sau đây có thể được sử dụng để thiết lập một phần tử cố định ở góc dưới cùng bên phải của cửa sổ trình duyệt?",
    options: {
      A: "position: fixed; bottom: 0; right: 0;",
      B: "position: absolute; bottom: 0; right: 0;",
      C: "position: static; bottom: 0; right: 0;",
      D: "position: relative; bottom: 0; right: 0;"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào được sử dụng để ẩn một phần tử?",
    options: {
      A: "display: none;",
      B: "display: hidden;",
      C: "visibility: hidden;",
      D: "visibility: none;"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Selector nào chọn tất cả các phần tử có class là \"example\"?",
    options: {
      A: "*example",
      B: "#example",
      C: "example",
      D: ".example"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Selector nào chọn tất cả các phần tử <p> mà là phần tử đầu tiên con của phần tử cha?",
    options: {
      A: "p:first-child",
      B: "p:first-of-type",
      C: "p:only-child",
      D: "p:last-child"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Selector nào dưới đây để chọn phần tử <li> ở vị trí lẻ trong một danh sách?",
    options: {
      A: "li:nth-child(even)",
      B: "li:nth-of-type(odd)",
      C: "li:nth-child(odd)",
      D: "li:odd-child"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Khi một phần tử thuộc tính position: fixed;, phần tử đó sẽ:",
    options: {
      A: "Di chuyển cùng với trang khi cuộn.",
      B: "Vẫn luôn ở cùng vị trí trong cửa sổ trình duyệt khi cuộn trang.",
      C: "Được đặt tương đối so với phần tử con gần nhất có thuộc tính position.",
      D: "Được đặt tương đối so với phần tử cha gần nhất."
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Để ngăn chặn các phần tử bị bao quanh một phần tử đã được float, ta sử dụng thuộc tính nào?",
    options: {
      A: "clear",
      B: "float",
      C: "overflow",
      D: "display"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Responsive Web Design (RWD) là gì?",
    options: {
      A: "Một kỹ thuật lập trình chỉ áp dụng cho máy tính cá nhân",
      B: "Một phương pháp thiết kế web để tạo ra trang web hiển thị tốt trên nhiều thiết bị và kích thước màn hình khác nhau",
      C: "Một loại kiến trúc mạng để tăng tốc độ tải trang web",
      D: "Một loại hình quảng cáo trên mạng Internet"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Câu lệnh @media nào dưới đây áp dụng các quy tắc CSS khi chỉ chiều rộng của thiết bị nhỏ hơn hoặc bằng 600px?",
    options: {
      A: "@media screen and (max-width: 600px) { ... }",
      B: "@media screen and (min-width: 600px) { ... }",
      C: "@media screen and (max-height: 600px) { ... }",
      D: "@media screen and (min-height: 600px) { ... }"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Media query nào dưới đây áp dụng các quy tắc CSS khi chiều cao của cửa sổ trình duyệt ít nhất là 400px và chiều rộng nhỏ hơn hoặc bằng 600px?",
    options: {
      A: "@media screen and (min-height: 400px) and (max-width: 600px) { ... }",
      B: "@media screen and (height: 400px) and (width: 600px) { ... }",
      C: "@media screen and (min-height: 400px) and (width: 600px) { ... }",
      D: "@media screen and (height: 400px) and (max-width: 600px) { ... }"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính CSS nào được sử dụng để xác định tỷ lệ mà một phần tử con sẽ mở rộng trong container Flexbox?",
    options: {
      A: "flex-grow",
      B: "flex-shrink",
      C: "flex-basis",
      D: "flex"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thuộc tính flex-shrink được sử dụng để xác định điều gì về phần tử con trong container Flexbox?",
    options: {
      A: "Tỷ lệ mở rộng",
      B: "Tỷ lệ co lại",
      C: "Tỷ lệ không gian trống",
      D: "Tỷ lệ phân trăm"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong JavaScript, từ khóa nào được sử dụng để khai báo một biến không thể thay đổi giá trị sau khi đã được gán giá trị?",
    options: {
      A: "let",
      B: "var",
      C: "const",
      D: "static"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Kết quả của biểu thức 2 + \"2\" trong JavaScript là gì?",
    options: {
      A: "4",
      B: "\"22\"",
      C: "NaN",
      D: "undefined"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Kết quả biến x là gì? var x = parseInt(\"12.5A\") + parseFloat(\"12.4A\");",
    options: {
      A: "24.9",
      B: "24.5",
      C: "24.9",
      D: "\"125124\""
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Đoạn mã nào có nhiệm vụ tạo đối tượng trong JavaScript?",
    options: {
      A: "conts dog = {};",
      B: "conts dog = new Object();",
      C: "conts dog = Object.create({});",
      D: "Tất cả đều đúng"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Lệnh x = 10; x2 = \"5\"; alert(s1 * s2); kết quả trên hộp thoại alert là:",
    options: {
      A: "10*5",
      B: "50",
      C: "Lỗi",
      D: "Tất cả đều sai"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Cho đoạn mã javascript như sau:\nvar s = \" Đại học Công Nghệ Sài Gòn \";\ns = s.trim();\nvar kq = s.split(\" \");\nKết quả kq[2] của đoạn mã trên:",
    options: {
      A: "Đại",
      B: "Nghệ",
      C: "Công",
      D: "Sài"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Kết quả của đoạn mã javascript dưới đây:\nlet person1 = {name: 'An'};\nlet person2 = person1;\nperson2.name = 'Bình';\nconsole.log(person1.name);",
    options: {
      A: "'An'",
      B: "'Bình'",
      C: "undefined",
      D: "error"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Kết quả của đoạn mã dưới đây là gì?\nvar array = [10, 20, 30, 40, 50];\nvar part = array.slice(1, 4);\nconsole.log(part);",
    options: {
      A: "[10, 20, 30, 40, 50]",
      B: "[20, 30, 40]",
      C: "[30, 40, 50]",
      D: "[20, 30, 40, 50]"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Nếu hiện tại thiết lập trên máy tính là thứ Tư ngày 19/6/2024, kết quả hộp thoại alert là gì sau lệnh:\nlet d = new Date();\nalert(d.getDay());?",
    options: {
      A: "4",
      B: "3",
      C: "Wed",
      D: "19"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Câu lệnh nào để thay đổi nội dung thẻ div thành \"abc\" :\n<div id=\"id1\"></div>",
    options: {
      A: "document.getElementById('id1').innerHTML=\"abc\";",
      B: "document.getElementsById('id1').innerHTML=\"abc\";",
      C: "document.getElementByTagName('div').innerHTML=\"abc\";",
      D: "document.getElementByTagName('div').innerHTML=\"abc\";"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để xóa toàn bộ nội dung trang web, dùng lệnh Javascript nào?",
    options: {
      A: "document.body.innerHTML=\"\";",
      B: "document.getElementsByTagName('body')[0].innerHTML=\";",
      C: "Cả hai a, b đều sai",
      D: "Cả hai a, b đều đúng"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Thay đổi thẻ div#id1 sử dụng class c2 là:",
    options: {
      A: "document.getElementById('id1').className='c2'",
      B: "document.getElementById('id1')='c2'",
      C: "document.getElementById('#id1').className ='c2'",
      D: "document.getElementById('id1').class ='c2'"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Để đếm xem trong trang web có bao nhiêu form ta sử dụng lệnh nào?",
    options: {
      A: "n = document.form.length;",
      B: "n = document.forms.length();",
      C: "n = document.forms.length;",
      D: "n = document.form.length();"
    },
    answer: "C",
    explanation: ""
  },
  {
    q: "Câu lệnh Javascript để quay về trang trước trong history của trình duyệt",
    options: {
      A: "`<button onclick=\"history.back()\">Go Back</button>`",
      B: "`<button onclick=\"history.go(-1)\">Go Back 2 Pages</button>`",
      C: "`<button onclick=\"history.go.back()\">Go Back 2 Pages</button>`",
      D: "Cả a,b đúng"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "jQuery là:",
    options: {
      A: "Thư viện javascript giúp viết mã javascript nhanh gọn hơn",
      B: "Một đối tượng của javascript",
      C: "Một dạng framework",
      D: "Một phần mềm lập trình javascript"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Phương thức jquery nào lấy (trả về) nội dung văn bản của tất cả các phần tử đã chọn:",
    options: {
      A: "html();",
      B: "attr();",
      C: "val();",
      D: "text()"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Câu lệnh nào của jQuery tương đương với lệnh javascript: document.getElementById('id1').innerHTML=10;",
    options: {
      A: "$(“id1”).html(10);",
      B: "$(\"#id1\").html(10);",
      C: "$(\"id1\").innerHTML=10;",
      D: "$(\"#id1\").htmlHTML=10;"
    },
    answer: "B",
    explanation: ""
  },
  {
    q: "Trong jQuery, để ẩn các thẻ p, sử dụng lệnh:",
    options: {
      A: "`$(\"<p>\").hide();`",
      B: "$(\"p\").display(\"none\");",
      C: "$(\"p\").display(\"hide\");",
      D: "$(\"p\").hide();"
    },
    answer: "D",
    explanation: ""
  },
  {
    q: "Để xóa phần tử có class là class1 bằng jQuery là:",
    options: {
      A: "$(\".class1\")[0].remove();",
      B: "$(#class1)[0].remove();",
      C: "$(\"class1\")[1].remove();",
      D: "$(\"#class1\")[1].remove();"
    },
    answer: "A",
    explanation: ""
  },
  {
    q: "Khi xây dựng Web responsive, trang web sẽ có màu nền là gì khi truy cập bằng smart phone nếu trang có css như dưới?\n@media only screen and (max-width: 768px) { body{background-color: red;} }\n@media only screen and (max-width: 768px) { body{background-color: green;} }\n@media only screen and (min-width: 992px) { body{background-color: blue;} }\n@media only screen and (min-width: 1200px) { body{background-color: yellow;} }",
    options: {
      A: "Red",
      B: "Green",
      C: "Blue",
      D: "Yellow"
    },
    answer: "B",
    explanation: "Quy tắc viết sau sẽ ghi đè quy tắc viết trước. Với thiết bị di động (chiều rộng nhỏ hơn 768px), cả hai media query max-width: 768px đều thỏa mãn, do đó màu nền sẽ là green do được khai báo sau."
  },
  {
    q: "Figma là:",
    options: {
      A: "Công cụ lập trình web",
      B: "Công cụ thiết kế web",
      C: "Framework CSS",
      D: "Thư viện javascript"
    },
    answer: "B",
    explanation: "Figma là một công cụ thiết kế giao diện người dùng (UI/UX) chạy trên nền tảng web rất phổ biến."
  },
  {
    q: "Khi sử dụng emmet trong Visual Code để viết html, lệnh nào tạo ra bảng có id=id1 và có 3 dòng, mỗi dòng 2 cột, nội dung mỗi ô là 5 từ:",
    options: {
      A: "table>#id1>tr*3>td*2>lorem5",
      B: "table>#id1>tr*3>td*2*lorem*5",
      C: "table#id1>tr*3>td*2>lorem*5",
      D: "table#id1>tr*3>td*5>lorem5"
    },
    answer: "C",
    explanation: "Trong Emmet, table#id1 tạo bảng có id='id1', tr*3 nhân bản 3 dòng, td*2 tạo 2 cột, và lorem*5 (hoặc lorem5) tạo đoạn văn bản giả gồm 5 từ."
  },
  {
    q: "Lệnh để sinh ra mã html như dưới sử dụng emmet là:\n<div id=\"container\">\n<div id=\"head\" class=\"c1\"></div>\n<div id=\"content\" class=\"c2\"></div>\n</div>",
    options: {
      A: "#container>#head.c1+#content.c2",
      B: "#container>#head.c1>#content.c2",
      C: "#container>(head.c1+content.c2)",
      D: "container>(head.c1+content.c2)"
    },
    answer: "A",
    explanation: "Cúp pháp Emmet #container>#head.c1+#content.c2 tạo phần tử cha #container chứa hai phần tử con đồng cấp (kết nối bằng dấu +) là #head.c1 và #content.c2."
  },
  {
    q: "AngularJS, ReactJS, và VueJS là:",
    options: {
      A: "Các thư viện/framework phổ biến để phát ứng dụng web fullstack",
      B: "Các thư viện/framework phổ biến phát triển web backend",
      C: "Các thư viện/framework phổ biến để phát triển giao diện người dùng trong ứng dụng web.",
      D: "Tất cả các câu trên là đúng"
    },
    answer: "C",
    explanation: "AngularJS, ReactJS và VueJS đều là các thư viện hoặc framework Javascript chạy ở phía client (frontend) dùng để xây dựng giao diện người dùng (UI)."
  },
  {
    q: "Thuộc tính nào được sử dụng để thay đổi kích thước chữ trong CSS?",
    options: {
      A: "font-size",
      B: "text-size",
      C: "size",
      D: "text-font"
    },
    answer: "A",
    explanation: "Trong CSS, thuộc tính font-size được dùng để điều chỉnh kích thước hiển thị của font chữ."
  },
  {
    q: "Selector nào được sử dụng để chọn phần tử <a> khi người dùng click (chọn) vào nó?",
    options: {
      A: "a:focus",
      B: "a:active",
      C: "a:hover",
      D: "a:visited"
    },
    answer: "B",
    explanation: "Pseudo-class :active kích hoạt khi phần tử (như thẻ <a>) đang được người dùng nhấn giữ chuột (click hoạt động)."
  },
  {
    q: "Khi sử dụng float trên một phần tử, phần tử này sẽ:",
    options: {
      A: "Thay đổi vị trí của phần tử cha",
      B: "Bị kéo ra khỏi luồng bình thường của tài liệu",
      C: "Ảnh hưởng đến tất cả các phần tử anh em bên ngoài container",
      D: "Không ảnh hưởng đến các phần tử khác"
    },
    answer: "B",
    explanation: "Khi một phần tử được float (trôi), nó sẽ bị đưa ra khỏi luồng bố cục bình thường (normal document flow) và các phần tử inline khác sẽ bao quanh nó."
  },
  {
    q: "Thuộc tính CSS nào được sử dụng để trình bày các phần tử nằm cùng nhau trên một hàng?",
    options: {
      A: "display: block;",
      B: "display: inline;",
      C: "visibility: hidden;",
      D: "display: none;"
    },
    answer: "B",
    explanation: "Thiết lập display: inline giúp phần tử hiển thị dưới dạng nội dòng, xếp cùng nhau trên một hàng thay vì tự động xuống dòng như block."
  },
  {
    q: "Selector nào chỉ chọn phần tử p chứa class \"example\"?",
    options: {
      A: "p:example",
      B: ".p.example",
      C: "p.example",
      D: "p^example"
    },
    answer: "C",
    explanation: "Cú pháp selector p.example chọn thẻ <p> có thuộc tính class chứa lớp 'example'."
  },
  {
    q: "Selector nào chọn phần tử <p> là phần tử con thứ 2 của phần tử cha tính từ cuối cùng?",
    options: {
      A: ":nth-last-child(2)",
      B: "p: nth-child(2)",
      C: "p:nth-child(2)",
      D: "p:nth-last-child(2)"
    },
    answer: "D",
    explanation: "Pseudo-class :nth-last-child(n) chọn phần tử là con thứ n tính từ cuối danh sách con của phần tử cha lên."
  },
  {
    q: "Selector nào chọn tất cả các phần tử <p> là anh em liền kề của một phần tử <p>?",
    options: {
      A: "p + p",
      B: "p ~ p",
      C: "p, p",
      D: "p p"
    },
    answer: "A",
    explanation: "Bộ chọn anh em liền kề + (adjacent sibling selector) chọn phần tử ngay sau phần tử thứ nhất nếu chúng có cùng cha trực tiếp."
  },
  {
    q: "Giá trị thuộc tính nào được đặt mặc định cho các phần tử html và không bị ảnh hưởng bởi các thuộc tính top, bottom, left và right.",
    options: {
      A: "position: static;",
      B: "position: relative;",
      C: "position: fixed;",
      D: "position: absolute;"
    },
    answer: "A",
    explanation: "Mặc định các phần tử HTML có thuộc tính position: static, xếp theo luồng văn bản thông thường và không chịu ảnh hưởng của các thuộc tính căn chỉnh vị trí."
  },
  {
    q: "Phần nội dung footer thường sử dụng thuộc tính nào để ngăn chặn các phần tử khác ảnh hưởng đến nó?",
    options: {
      A: "float: auto;",
      B: "clear: auto;",
      C: "overflow: hidden;",
      D: "clear: both;"
    },
    answer: "D",
    explanation: "Thuộc tính clear: both triệt tiêu tác động float từ cả hai phía, giúp footer hiển thị bình thường ở bên dưới các phần tử float trước đó."
  },
  {
    q: "Trong CSS, thuộc tính \"min-width\" được sử dụng để làm gì trong Responsive Web Design?",
    options: {
      A: "Xác định chiều rộng tối đa cho một phần tử",
      B: "Xác định chiều cao tối đa cho một phần tử",
      C: "Xác định chiều rộng tối thiểu cho một phần tử",
      D: "Xác định chiều cao tối thiểu cho một phần tử"
    },
    answer: "C",
    explanation: "Thuộc tính min-width quy định chiều rộng tối thiểu mà một phần tử có thể thu nhỏ lại trên các màn hình có kích thước nhỏ."
  },
  {
    q: "Media query nào dưới đây áp dụng các quy tắc CSS chỉ khi thiết bị là máy in?",
    options: {
      A: "@media print {...}",
      B: "@media printer {...}",
      C: "@media screen and (device: print) {...}",
      D: "@media screen and (type: print) {...}"
    },
    answer: "A",
    explanation: "Từ khóa print trong truy vấn @media áp dụng định dạng CSS chuyên dụng khi trang được xem trước hoặc gửi đi in ấn."
  },
  {
    q: "Media query nào dưới đây áp dụng các quy tắc CSS chỉ khi chiều cao của cửa sổ trình duyệt ít nhất là 400px và chiều rộng ít nhất là 600px?",
    options: {
      A: "@media screen and (min-height: 400px) and (max-width: 600px) {...}",
      B: "@media screen and (height: 400px) and (width: 600px) {...}",
      C: "@media screen and (min-height: 400px) and (min-width: 600px) {...}",
      D: "@media screen and (height: 400px) and (max-width: 600px) {...}"
    },
    answer: "C",
    explanation: "Để đặt điều kiện chiều cao ít nhất 400px ta dùng min-height: 400px, và chiều rộng ít nhất 600px ta dùng min-width: 600px, kết hợp lại bằng từ khóa and."
  },
  {
    q: "Thuộc tính CSS nào được sử dụng để xác định tỷ lệ mà một phần tử con sẽ co lại trong container Flexbox?",
    options: {
      A: "flex-grow",
      B: "flex-basis",
      C: "flex-shrink",
      D: "flex"
    },
    answer: "C",
    explanation: "Thuộc tính flex-shrink xác định hệ số co lại (shrink factor) của các item con trong Flexbox khi container không đủ không gian chứa."
  },
  {
    q: "Thuộc tính flex-basis được sử dụng để xác định điều gì về phần tử con trong container Flexbox?",
    options: {
      A: "Tỷ lệ mở rộng",
      B: "Tỷ lệ co lại",
      C: "Chỉ định độ dài ban đầu",
      D: "Chỉ định độ cao ban đầu"
    },
    answer: "C",
    explanation: "Thuộc tính flex-basis quy định kích thước cơ sở ban đầu (chiều rộng hoặc chiều cao tùy thuộc flex-direction) của flex item trước khi các không gian dư thừa được phân bổ."
  },
  {
    q: "Kết quả của biểu thức 4 + \"4\" trong JavaScript là gì?",
    options: {
      A: "\"44\"",
      B: "8",
      C: "NaN",
      D: "undefined"
    },
    answer: "A",
    explanation: "Trong JavaScript, phép cộng giữa một số và một chuỗi sẽ chuyển số thành chuỗi rồi thực hiện nối chuỗi, trả về '44'."
  },
  {
    q: "Kết quả biến s là gì?\nvar s = parseInt(\"1.7A\") + parseFloat(\"2.5A\");",
    options: {
      A: "3.2",
      B: "3.5",
      C: "\"1725\"",
      D: "2.7"
    },
    answer: "B",
    explanation: "Hàm parseInt(\"1.7A\") trích xuất phần nguyên là 1. Hàm parseFloat(\"2.5A\") trích xuất số thực là 2.5. Kết quả phép cộng là 1 + 2.5 = 3.5."
  },
  {
    q: "Lệnh: a! = \"10\"; s2 = 5; alert(a! + s2); Kết quả trên hộp thoại Alert là",
    options: {
      A: "15",
      B: "\"10\"5",
      C: "105",
      D: "\"55\""
    },
    answer: "C",
    explanation: "Chuỗi \"10\" cộng với số 5 sẽ kích hoạt phép nối chuỗi, trả về chuỗi \"105\" hiển thị trên hộp thoại alert."
  },
  {
    q: "Cho đoạn mã javascript như sau:\nvar kq = \"Đại học Công Nghệ Sài Gòn\";\nvar kq_ = kq.split(\" \");\nKết quả kq[4] của đoạn mã trên:",
    options: {
      A: "Đại",
      B: "Nghệ",
      C: "Gòn",
      D: "Sài"
    },
    answer: "D",
    explanation: "Hàm split(\" \") cắt chuỗi ban đầu bằng khoảng trắng thành mảng các từ. Phần tử ở chỉ số 4 (phần tử thứ 5) của mảng chính là từ \"Sài\"."
  },
  {
    q: "Kết quả của đoạn mã dưới đây là gì?\nvar array = [10, 20, 30, 40, 50];\nvar newArray = array.slice(1, 4);\nconsole.log(newArray);",
    options: {
      A: "[20, 30, 40]",
      B: "[50, 40, 50]",
      C: "[20, 30, 40, 50]",
      D: "[10, 20, 30, 40]"
    },
    answer: "A",
    explanation: "Hàm slice(start, end) trích xuất mảng con từ chỉ số start (bao gồm) đến end (không bao gồm). Ở đây trích từ chỉ số 1 (20) đến 3 (40), trả về [20, 30, 40]."
  },
  {
    q: "Kết quả của đoạn mã javascript dưới đây:\nlet person = {\nname: \"An\",\nage:30\n};\nObject.keys(person).forEach(key => {\nconsole.log(key);\n});",
    options: {
      A: "age",
      B: "Name",
      C: "An 30",
      D: "'name age'"
    },
    answer: "D",
    explanation: "Hàm Object.keys(person) trả về mảng chứa tên các thuộc tính của đối tượng là ['name', 'age']. Vòng lặp forEach lần lượt in ra tên các khóa này."
  },
  {
    q: "Ngày hiện tại thiết lập trên máy tính là thứ Sáu ngày 21/6/2024, kết quả hộp thoại là gì sau lệnh: new Date().getDay();",
    options: {
      A: "21",
      B: "Fri",
      C: "0",
      D: "5"
    },
    answer: "D",
    explanation: "Hàm getDay() trong JavaScript trả về chỉ số của thứ trong tuần: 0 đại diện cho Chủ Nhật, 1 cho Thứ Hai, ..., và 5 đại diện cho Thứ Sáu."
  },
  {
    q: "Câu lệnh nào để nhập nội dung thẻ div thành = \"abc\": <div id=\"id1\"></div>",
    options: {
      A: "document.getElementById('id1').innerHTML = \"abc\";",
      B: "document.getElementsByTagName('div').innerHTML = \"abc\";",
      C: "document.getElementsByTagName('div').innerHTML = \"abc\";",
      D: "document.getElementById('id1').innerText = \"abc\";"
    },
    answer: "A",
    explanation: "Gán thuộc tính innerHTML hoặc textContent của phần tử lấy được từ document.getElementById('id1') để thay đổi nội dung bên trong của nó."
  },
  {
    q: "Để chuyển trang web tới https://www.google.com/search?q=google.com.vn, sử dụng lệnh",
    options: {
      A: "URL.location = \"https://www.google.com.vn/\"",
      B: "window.URL.location=\"https://www.google.com/\"",
      C: "window.location=\"https://www.google.com.vn/\"",
      D: "window.location=\"https://www.google.com.\""
    },
    answer: "C",
    explanation: "Gán một địa chỉ URL mới cho window.location để điều hướng trình duyệt đến trang web mong muốn."
  },
  {
    q: "Để thay đổi màu chữ của phần tử có name n thành 'red' là:",
    options: {
      A: "document.getElementsByName('n').color = 'red';",
      B: "document.getElementsByName('n').add.color = 'red';",
      C: "document.getElementsByName('n').style.color = 'red';",
      D: "document.getElementsByName('n').css.color = 'red';"
    },
    answer: "C",
    explanation: "Để đổi màu chữ bằng Javascript, ta truy cập thuộc tính .style.color. Dù getElementsByName trả về một danh sách (cần [0] để lấy phần tử cụ thể), phương án C là phương án chuẩn nhất trong ngân hàng đề."
  },
  {
    q: "Câu lệnh nào của jQuery tương đương với lệnh javascript: document.getElementById(\"id1\").textContent = 10;",
    options: {
      A: "$(\"#id1\").text(10);",
      B: "$(\"#id1\").text(10);",
      C: "$(\"#id1\").textContent = 10;",
      D: "$(\"#id1\").textContent = 10;"
    },
    answer: "A",
    explanation: "Trong jQuery, bộ chọn $(\"#id1\") lấy phần tử theo ID và phương thức .text(value) được dùng để lấy hoặc gán nội dung văn bản cho phần tử đó."
  },
  {
    q: "Lệnh để sinh ra mã html như dưới:\n<div id=\"container\">\n<head>\n<title>Content</title>\n</head>\n<body>\n<div class=\"content\"></div>\n</body>\n</div>",
    options: {
      A: "#container>#head.c1>#content.c2",
      B: "#container>head.c1+content.c2",
      C: "#container>(head.c1+content.c2)",
      D: "container>(head.c1+content.c2)"
    },
    answer: "C",
    explanation: "Dấu ngoặc đơn () trong Emmet được dùng để gom nhóm các phần tử con đồng cấp lại với nhau dưới một phần tử cha chung (ở đây là #container)."
  },
  {
    q: "Khi xây dựng Web responsive, trang web sẽ có màu nền là gì khi truy cập bằng smart phone nếu trang có css như dưới?\n@media only screen and (max-width: 600px) {\nbody {background-color: yellow;}\n}\n@media only screen and (min-width: 601px) {\nbody {background-color: green;}\n}\n@media only screen and (min-width: 992px) {\nbody {background-color: blue;}\n}\n@media only screen and (min-width: 1200px) {\nbody {background-color: red;}\n}",
    options: {
      A: "Red",
      B: "Green",
      C: "Blue",
      D: "Yellow"
    },
    answer: "D",
    explanation: "Khi truy cập bằng smartphone có chiều rộng màn hình <= 600px, media query @media only screen and (max-width: 600px) thỏa mãn nên màu nền sẽ được thiết lập là yellow."
  },
  {
    q: "Khi sử dụng emmet trong Visual Code để thiết kế html, lệnh nào tạo ra bảng có id=id1 và có 3 dòng, mỗi dòng 2 cột, nội dung mỗi ô là từ 5 từ.",
    options: {
      A: "table#id1>tr*3>td*2>lorem*5",
      B: "table#id1>tr*3>td*2>lorem*5",
      C: "table#id1>tr*3>td*2>lorem5",
      D: "table#id1>tr*3>td*2>lorem5"
    },
    answer: "A",
    explanation: "Trong Emmet, lorem*5 (hoặc lorem5) tạo ra 5 từ văn bản mẫu giả lập điền vào mỗi ô td của bảng."
  }
];

