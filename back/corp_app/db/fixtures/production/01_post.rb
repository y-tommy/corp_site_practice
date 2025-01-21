12.times do |i|
  Post.create!(
    title: "news#{i + 1}",
    content: "news投稿のダミー#{i + 1}"
  )
end