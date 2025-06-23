
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Plus, 
  Eye,
  BarChart3,
  Video
} from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const students = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', course: 'مقدمة في البرمجة', status: 'نشط' },
    { id: 2, name: 'فاطمة علي', email: 'fatima@example.com', course: 'تطوير المواقع', status: 'مكتمل' },
    { id: 3, name: 'محمد حسن', email: 'mohamed@example.com', course: 'أساسيات التصميم', status: 'نشط' },
  ];

  const courses = [
    { id: 1, title: 'مقدمة في البرمجة', students: 45, revenue: '6750ج', status: 'منشور' },
    { id: 2, title: 'تطوير المواقع', students: 32, revenue: '4800ج', status: 'منشور' },
    { id: 3, title: 'أساسيات التصميم', students: 28, revenue: '4200ج', status: 'مسودة' },
  ];

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">لوحة تحكم المدرس</h1>
          <p className="text-slate-600">مرحباً أحمد، إليك نظرة عامة على منصتك التعليمية</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600">إجمالي الطلاب</p>
                <p className="text-2xl font-bold text-slate-900">230</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600">إجمالي الأرباح</p>
                <p className="text-2xl font-bold text-slate-900">15,450ج</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600">الدورات المنشورة</p>
                <p className="text-2xl font-bold text-slate-900">12</p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-600" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600">معدل الإكمال</p>
                <p className="text-2xl font-bold text-slate-900">85%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-600" />
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'overview' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            نظرة عامة
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'courses' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            إدارة الدورات
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'students' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            الطلاب
          </button>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>الدورات الأكثر شعبية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-slate-600">{course.students} طالب</p>
                      </div>
                      <span className="text-green-600 font-medium">{course.revenue}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الطلاب الجدد</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.slice(0, 3).map((student) => (
                    <div key={student.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-slate-600">{student.course}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'courses' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">إدارة الدورات</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 ml-2" />
                إضافة دورة جديدة
              </Button>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم الدورة</TableHead>
                    <TableHead>عدد الطلاب</TableHead>
                    <TableHead>الإيرادات</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell>{course.revenue}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.status === 'منشور' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Video className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {activeTab === 'students' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">قائمة الطلاب</h2>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم الطالب</TableHead>
                    <TableHead>البريد الإلكتروني</TableHead>
                    <TableHead>الدورة</TableHead>
                    <TableHead>حالة الالتزام</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.course}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          student.status === 'نشط' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {student.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
