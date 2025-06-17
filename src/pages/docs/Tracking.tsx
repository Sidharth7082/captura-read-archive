
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, Calendar, TrendingUp, Award, Clock } from "lucide-react";

const Tracking = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Reading Tracking</h1>
        <p className="text-xl text-gray-600">
          Monitor your reading progress, set goals, and gain insights into your reading habits with CaptureRead's comprehensive tracking features.
        </p>
      </div>

      <div className="space-y-8">
        {/* Reading Progress */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <span>Reading Progress</span>
            </CardTitle>
            <CardDescription>
              Track your progress through individual books and your entire library
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Book Progress
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Automatic progress tracking as you read</li>
                  <li>• Percentage completion displayed in library</li>
                  <li>• Estimated time remaining based on reading speed</li>
                  <li>• Visual progress bars for quick overview</li>
                  <li>• Sync progress across all your devices</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Reading Analytics
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Daily, weekly, and monthly reading statistics</li>
                  <li>• Pages read and time spent reading</li>
                  <li>• Reading speed analysis and trends</li>
                  <li>• Most active reading times and days</li>
                  <li>• Genre and author reading patterns</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Accessing Your Progress</h3>
              <p className="text-sm text-gray-700 mb-2">
                View your reading progress and statistics from multiple locations:
              </p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• <strong>Library View:</strong> Progress bars on each book cover</li>
                <li>• <strong>Dashboard:</strong> Overall statistics and recent activity</li>
                <li>• <strong>Book Details:</strong> Detailed progress for individual books</li>
                <li>• <strong>Statistics Page:</strong> Comprehensive reading analytics</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Reading Goals */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-green-600" />
              <span>Reading Goals</span>
            </CardTitle>
            <CardDescription>
              Set and achieve personal reading goals to stay motivated
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Types of Goals</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800">Books Per Year</h4>
                    <p className="text-sm text-purple-600">Set a target number of books to read annually</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800">Pages Per Day</h4>
                    <p className="text-sm text-blue-600">Maintain a consistent daily reading habit</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800">Reading Streaks</h4>
                    <p className="text-sm text-green-600">Build momentum with consecutive reading days</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-800">Genre Challenges</h4>
                    <p className="text-sm text-orange-600">Explore different genres and expand your horizons</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">Setting Up Goals</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Navigate to Dashboard → Reading Goals</li>
                  <li>Choose your goal type and set a target</li>
                  <li>Select the time period (daily, weekly, monthly, yearly)</li>
                  <li>Add optional reminders and notifications</li>
                  <li>Track your progress with visual indicators</li>
                </ol>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">💡 Goal Setting Tips</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Start with achievable goals and gradually increase</li>
                    <li>• Consider your schedule and reading speed</li>
                    <li>• Use streaks to build consistent habits</li>
                    <li>• Celebrate milestones to stay motivated</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reading History */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-purple-600" />
              <span>Reading History</span>
            </CardTitle>
            <CardDescription>
              Keep track of your completed books and reading journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">Completed Books</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Automatic completion tracking</li>
                  <li>• Completion dates and reading duration</li>
                  <li>• Personal ratings and reviews</li>
                  <li>• Export your reading history</li>
                </ul>
              </div>
              
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h3 className="font-semibold mb-2">Reading Timeline</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chronological view of your reading</li>
                  <li>• Reading sessions and time spent</li>
                  <li>• Milestone achievements</li>
                  <li>• Reading habit patterns</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">History Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">📚 Library Stats</h4>
                  <p className="text-sm text-gray-600">View total books read, pages consumed, and reading time</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">📊 Trends</h4>
                  <p className="text-sm text-gray-600">Analyze your reading patterns and identify trends</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🎯 Insights</h4>
                  <p className="text-sm text-gray-600">Get personalized recommendations based on your history</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-yellow-600" />
              <span>Achievements & Badges</span>
            </CardTitle>
            <CardDescription>
              Unlock achievements and earn badges for your reading milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🥇</div>
                <h3 className="font-semibold">First Book</h3>
                <p className="text-sm text-gray-600">Complete your first book</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold">Bookworm</h3>
                <p className="text-sm text-gray-600">Read 50 books in a year</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🔥</div>
                <h3 className="font-semibold">Streak Master</h3>
                <p className="text-sm text-gray-600">Maintain a 30-day reading streak</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🌟</div>
                <h3 className="font-semibold">Genre Explorer</h3>
                <p className="text-sm text-gray-600">Read books from 10 different genres</p>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold">Speed Reader</h3>
                <p className="text-sm text-gray-600">Read 1000 pages in a week</p>
              </div>
              
              <div className="p-4 bg-indigo-50 rounded-lg text-center">
                <div className="text-2xl mb-2">💎</div>
                <h3 className="font-semibold">Collector</h3>
                <p className="text-sm text-gray-600">Build a library of 500+ books</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
              <h3 className="font-semibold mb-2">Unlocking Achievements</h3>
              <p className="text-sm text-gray-700">
                Achievements are automatically unlocked as you reach milestones. Check your progress in the Achievements section of your profile, and share your badges with friends to celebrate your reading accomplishments!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tracking;
