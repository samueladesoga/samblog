+++
date = "2013-02-27 15:15:03"
title = "Copying objects between two different amazon s3 accounts"
draft = "false"
categories = ["Technical"]
tags = ["AWS S3"]
author = "samueladesoga"
+++

I have recently taken on ownership of a <a href="http://www.freelancify.com">website </a>and as part of the migration task i've had to copy over a few artefacts;I will be posting another blog about what i have learnt from this process.

The website uses Amazon s3 for storing users' uploaded photos and document. I was faced with the task of copying these files over to my S3 account. Quite a number of ways to achieve this; but i stumbled on a <a href="https://github.com/paultuckey/s3-bucket-to-bucket-copy-py/blob/master/s3-bucket-to-bucket-copy.py">link </a>which is a python script that copies object between two buckets in the same account.

I have then updated this script to handle copying objects between two different accounts.The edited script is as below:

{{< code "python" >}}
from boto.s3.connection import S3Connection
from boto.s3.key import Key
from Queue import LifoQueue
import threading

source_aws_key = '*******************'
source_aws_secret_key = '*******************'
dest_aws_key = '*******************'
dest_aws_secret_key = '*******************'
srcBucketName = '*******************'
dstBucketName = '*******************'

class Worker(threading.Thread):
    def __init__(self, queue):
        threading.Thread.__init__(self)
        self.source_conn = S3Connection(source_aws_key, source_aws_secret_key)
        self.dest_conn = S3Connection(dest_aws_key, dest_aws_secret_key)
        self.srcBucket = self.source_conn.get_bucket(srcBucketName)
        self.dstBucket = self.dest_conn.get_bucket(dstBucketName)
        self.queue = queue

    def run(self):
        while True:
            key_name = self.queue.get()
            k = Key(self.srcBucket, key_name)
            dist_key = Key(self.dstBucket, k.key)
            if not dist_key.exists() or k.etag != dist_key.etag:
                print 'copy: ' + k.key
                self.dstBucket.copy_key(k.key, srcBucketName, k.key, storage_class=k.storage_class)
            else:
                print 'exists and etag matches: ' + k.key

            self.queue.task_done()

def copyBucket(maxKeys = 1000):
    print 'start'
	
    s_conn = S3Connection(source_aws_key, source_aws_secret_key)
    srcBucket = s_conn.get_bucket(srcBucketName)

    resultMarker = ''
    q = LifoQueue(maxsize=5000)

    for i in range(10):
        print 'adding worker'
        t = Worker(q)
        t.daemon = True
        t.start()

    while True:
        print 'fetch next 1000, backlog currently at %i' % q.qsize()
        keys = srcBucket.get_all_keys(max_keys = maxKeys, marker = resultMarker)
        for k in keys:
            q.put(k.key)
        if len(keys) &lt; maxKeys:
            print 'Done'
            break
        resultMarker = keys[maxKeys - 1].key

    q.join()
    print 'done'

if __name__ == &quot;__main__&quot;:
    copyBucket()

{{< /code >}}

Pre-requisites are you have to install python and install the <a href="https://github.com/boto/boto">boto s3</a> library and obviously you have to put your credentials in there.

