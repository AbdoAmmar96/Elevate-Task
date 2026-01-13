import React from 'react';
import { ArrowLeft, User, Calendar } from 'lucide-react';

const BlogPost = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col font-sans  ">
      {/* الجزء العلوي: الخلفية الزرقاء والمحتوى */}
      <header className="relative bg-gradient-to-br from-slate-800 to-slate-600 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
        {/* طبقة خلفية شفافة لتغميق الصورة إذا لزم الأمر */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative max-w-3xl mx-auto z-10">
          {/* زر العودة */}
          <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white rounded-full py-2 px-4 mb-8 transition duration-200 backdrop-blur-sm">
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Posts</span>
          </button>
          
          {/* عنوان المنشور */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            sunt aut facere repellat provident occaecati excepturi optio reprehenderit
          </h1>
          
          {/* معلومات الكاتب والتاريخ */}
          <div className="flex flex-wrap items-center text-sm text-white/80 space-x-6">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>Leanne Graham</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>Sun, August 24th, 2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* الجزء السفلي: محتوى المنشور والخلفية الضبابية */}
      <main className="relative flex-grow bg-gray-50">
        {/* صورة خلفية ضبابية خفيفة */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1200x800?mountain,snow')" }} // استبدل هذا برابط صورتك
        ></div>
        
        {/* حاوية المحتوى النصي */}
        <div className="relative max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 z-10">
          <div className="prose prose-lg text-gray-800 bg-white/80 p-8 rounded-lg shadow-sm backdrop-blur-md">
            <p>
              quia et suscipit<br/>
              suscipit recusandae consequuntur expedita et cum<br/>
              reprehenderit molestiae ut ut quas totam<br/>
              nostrum rerum est autem sunt rem eveniet architecto
            </p>
            {/* يمكنك إضافة المزيد من الفقرات هنا */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;