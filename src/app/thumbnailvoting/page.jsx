import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Info, Lock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ThumbnailVoting = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  
  // Simulated thumbnail data
  const thumbnails = [
    { id: 'thumbnail1', title: 'Thumbnail Option 1', votes: 45 },
    { id: 'thumbnail2', title: 'Thumbnail Option 2', votes: 32 },
    { id: 'thumbnail3', title: 'Thumbnail Option 3', votes: 28 },
    { id: 'thumbnail4', title: 'Thumbnail Option 4', votes: 15 }
  ];

  const [votes, setVotes] = useState(
    thumbnails.reduce((acc, thumb) => ({
      ...acc,
      [thumb.id]: thumb.votes
    }), {})
  );

  // Check if user has voted before (using localStorage)
  useEffect(() => {
    const voted = localStorage.getItem('hasVoted');
    if (voted) {
      setHasVoted(true);
    }
  }, []);

  const handleVote = (thumbnailId) => {
    if (!hasVoted) {
      setSelectedThumbnail(thumbnailId);
      setVotes(prev => ({
        ...prev,
        [thumbnailId]: prev[thumbnailId] + 1
      }));
      setHasVoted(true);
      localStorage.setItem('hasVoted', 'true');
    }
  };

  const getTotalVotes = () => {
    return Object.values(votes).reduce((a, b) => a + b, 0);
  };

  const getVotePercentage = (voteCount) => {
    const total = getTotalVotes();
    return total === 0 ? 0 : Math.round((voteCount / total) * 100);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Instructions Section */}
      {showInstructions && (
        <Alert className="mb-6">
          <Info className="h-5 w-5" />
          <AlertDescription>
            Welcome! Please select your favorite thumbnail from the options below. 
            Click the "Vote" button under your preferred choice. You can only vote once.
          </AlertDescription>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowInstructions(false)}
            className="absolute top-2 right-2"
          >
            ×
          </Button>
        </Alert>
      )}

      {/* Main Title */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Thumbnail Voting</h1>
        <p className="text-gray-600">Help us choose the best thumbnail for our video</p>
      </div>

      {/* Voting Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {thumbnails.map(({ id, title }) => {
          const isSelected = selectedThumbnail === id;
          const voteCount = votes[id];
          const percentage = getVotePercentage(voteCount);
          
          return (
            <Card 
              key={id}
              className={`transform transition-all duration-200 ${
                isSelected ? 'ring-2 ring-blue-500 scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
            >
              <CardContent className="p-6">
                {/* Thumbnail Image */}
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/api/placeholder/640/360"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title and Vote Count */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">{title}</h3>
                  <div className="flex items-center gap-2">
                    <ThumbsUp 
                      className={isSelected ? 'text-blue-500' : 'text-gray-400'} 
                      size={18}
                    />
                    <span className="text-sm font-medium">
                      {voteCount} {voteCount === 1 ? 'vote' : 'votes'}
                    </span>
                  </div>
                </div>

                {/* Progress Bar and Vote Button */}
                <div className="space-y-4">
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{percentage}% of votes</span>
                    <Button
                      onClick={() => handleVote(id)}
                      disabled={hasVoted}
                      variant={isSelected ? "default" : "outline"}
                      className="min-w-[100px]"
                    >
                      {hasVoted ? (
                        <span className="flex items-center gap-2">
                          <Lock size={14} />
                          {isSelected ? 'Voted!' : 'Locked'}
                        </span>
                      ) : (
                        'Vote'
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Thank You Message */}
      {hasVoted && (
        <Alert className="mt-6 bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Thank you for voting! Your choice has been recorded. 
            Total votes: {getTotalVotes()}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Thumbnailvoting;